import { createClient, getSession } from "@/utils/supabase/auth";  // Importa la función desde el archivo auth.ts
import { NextRequest, NextResponse } from "next/server";

// Middleware para validar la sesión y redirigir según el rol del usuario
export async function middleware(req: NextRequest) {
  const session = await getSession(req); // Usar la función getSession desde auth.ts

  // Si no hay sesión, redirigir al usuario a la página de inicio de sesión
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Obtener el rol del usuario desde la base de datos
  const supabase = createClient();  // Crear cliente nuevamente para hacer la consulta de rol
  const { data: userData, error } = await supabase
    .from('usuarios') // Nombre de la tabla de usuarios
    .select('rol') // Selecciona el campo 'role'
    .eq('id', session.user.id) // Compara el ID del usuario con el ID en la tabla
    .single(); // Asegúrate de que solo obtienes un resultado

  if (error || !userData) {
    return NextResponse.redirect(new URL("/sign-in", req.url)); // Si no se encuentra el rol o hay un error, redirigir
  }

  const userRole = userData.rol; // Aquí obtienes el rol del usuario desde la base de datos

  // Redirigir según el rol del usuario
  switch (userRole) {
    case "cliente":
      return NextResponse.redirect(new URL("/dashboard/cliente", req.url));
    case "colaborador":
      return NextResponse.redirect(new URL("/dashboard/colaborador", req.url));
    case "jefe":
      return NextResponse.redirect(new URL("/dashboard/jefe", req.url));
    default:
      return NextResponse.next(); // En caso de que no haya un rol conocido, continúa la solicitud
  }
}
