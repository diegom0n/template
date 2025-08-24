"use client";

import { useEffect, useState } from "react";
import { supabaseClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Obtener la sesión actual
    const getSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session) {
        setUser(session.user);
        fetchUserRole(session.user.id);
      }
      setLoading(false);
    };

    getSession();

    // Suscribirse a los cambios de la sesión
    const authListener = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
        if (session?.user) {
          fetchUserRole(session.user.id);
        }
      }
    );

    // Limpiar la suscripción cuando el componente se desmonte
    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  const fetchUserRole = async (userId: string) => {
    console.log("Fetching user role for userId:", userId);
  
    try {
      const { data, error } = await supabaseClient
        .from("usuarios")
        .select("*") // Selecciona todos los campos para depuración
        .eq("id", userId)
        .single();
  
      if (error) {
        console.error("Error fetching user role:", error.message);
        return;
      }
  
      console.log("User data found:", data);
  
      setRole(data?.rol);
    } catch (error) {
      console.error("Unexpected error fetching user role:", error);
    }
  };  

  return { user, role, loading };
};

export default useUser;
