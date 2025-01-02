import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

// Crea el cliente de Supabase para el servidor
export const createServerSupabaseClient = (request: NextRequest) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        },
      },
    }
  );
};

// Crea el cliente de Supabase para el cliente (sin NextRequest)
export const createClient = () => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

// Función para obtener la sesión de Supabase desde el servidor
export const getSession = async (request: NextRequest) => {
  const supabase = createServerSupabaseClient(request);
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

// Función para iniciar sesión (compatible con cliente)
export const signIn = async (email: string, password: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { user: null, error };
  }

  return { user: data?.user, error: null };
};

// Función para cerrar sesión desde el servidor
export const signOut = async (request: NextRequest) => {
  const supabase = createServerSupabaseClient(request);
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error };
  }

  return { success: true };
};
