'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation"; // Importamos useRouter desde next/navigation

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Usamos el hook de navegación de Next.js

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación para asegurarnos de que los campos no estén vacíos
    if (!name || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Validación de contraseñas
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    setError("");

    // Intentamos crear el usuario en Supabase
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Verificamos que el 'data' y 'data.user' existen
    const user = data?.user;

    if (user) {
      // Guardamos el nombre y correo del usuario en la base de datos
      const { error: insertError } = await supabase
        .from("usuarios") // Suponiendo que tienes una tabla llamada 'usuarios'
        .insert([
          {
            id: user.id,  // Guardamos el ID del usuario de Supabase
            nombre: name,  // Guardamos el nombre del usuario
            email: email,  // Guardamos el correo del usuario
            rol: "cliente", // Asignamos rol "Cliente" por defecto
          },
        ]);

      if (insertError) {
        setError(insertError.message);
        setLoading(false);
        return;
      } else {
        // Redirigir a la página de inicio de sesión
        router.push("/sign-in");  // Aquí se redirige a la página de login
      }
    }

    setLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registro de Cuenta</CardTitle>
          <CardDescription>
            Complete los campos para crear su cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Cargando..." : "Registrar"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿Ya tiene cuenta?{" "}
              <a href="/sign-in" className="underline underline-offset-4">
                Iniciar sesión
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
