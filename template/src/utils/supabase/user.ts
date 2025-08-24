import { supabaseClient } from "./client";

/**
 * Obtiene los datos del usuario autenticado desde Supabase.
 */
export const getCurrentUser = async () => {
  const {
    data: { session },
    error: sessionError,
  } = await supabaseClient.auth.getSession();

  if (sessionError) {
    console.error("Error al obtener la sesión:", sessionError);
    throw new Error("No se pudo obtener la sesión del usuario.");
  }

  if (!session) {
    throw new Error("No hay ningún usuario autenticado.");
  }

  const { data: user, error: userError } = await supabaseClient
    .from("usuarios")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (userError) {
    console.error("Error al obtener los datos del usuario:", userError);
    throw new Error("No se pudieron obtener los datos del usuario.");
  }

  return user;
};
