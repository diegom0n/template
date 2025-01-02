"use client";

import { supabase } from "@/utils/supabase/supabase";
import { useEffect, useState } from "react";

export default function SupabaseTest() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase.from("usuarios").select("*");

      if (error) {
        setError(error.message);
        console.error("Error fetching data:", error.message);
      } else {
        setData(data);
        console.log("Data fetched successfully:", data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Supabase Test</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
