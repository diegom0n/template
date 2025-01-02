import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Esto es para usar cookies en el entorno de Next.js correctamente, dependiendo de donde se ejecute.
export const createClient = async (cookieStore: ReturnType<typeof cookies>) => {
  // Resolvemos la promesa de cookies
  const resolvedCookieStore = await cookieStore;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          // Ahora que hemos resuelto la promesa, podemos acceder a getAll
          return resolvedCookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            // Establecemos todas las cookies correctamente
            cookiesToSet.forEach(({ name, value, options }) => {
              // Guardamos las cookies utilizando la API de cookies de Next.js
              resolvedCookieStore.set(name, value, options);
            });
          } catch (error) {
            // Si ocurre un error al intentar establecer cookies, puede ser ignorado si es parte de una configuración de sesión.
            console.error("Error al establecer cookies:", error);
          }
        },
      },
    }
  );
};
