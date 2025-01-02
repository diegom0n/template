'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Asegúrate de tener este componente configurado
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // Importa los componentes necesarios de ShadCN-UI

const tramites = [
  {
    id: "1",
    title: "Aprobación O.M. ampliación Vivienda Social",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "aprobaciones"
  },
  {
    id: "2",
    title: "Aprobación obra menor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    category: "aprobaciones"
  },
  {
    id: "3",
    title: "Aprobación recepción de urbanización",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula orci in lorem tincidunt efficitur.",
    category: "aprobaciones"
  },
  {
    id: "4",
    title: "Solicitud de permiso obra menor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "solicitudes"
  },
  {
    id: "5",
    title: "Solicitud de recepción",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    category: "solicitudes"
  },
  {
    id: "6",
    title: "Solicitud informes previos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula orci in lorem tincidunt efficitur.",
    category: "solicitudes"
  },
  {
    id: "7",
    title: "Solicitud número y afectación",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    category: "solicitudes"
  },
  {
    id: "8",
    title: "Solicitud de subdivisión",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula orci in lorem tincidunt efficitur.",
    category: "solicitudes"
  },
];

const TramitesPage = () => {
  // Filtramos los trámites por categoría
  const aprobaciones = tramites.filter((tramite) => tramite.category === "aprobaciones");
  const solicitudes = tramites.filter((tramite) => tramite.category === "solicitudes");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Lista de Formularios</h1>
      <Link
        href="https://www.islademaipo.cl/wp-content/uploads/2023/04/ROLREAVALUO_SNE-14502_2023-1.pdf"
        target="_blank"
      >
        <p>“Según lo dispuesto en el art. 6 de la ley 17.235 sobre impuesto territorial se publica el rol de cobro con ocasión del Reavaluo de los sitios no edificados, propiedades abandonadas y/o pozos lastreros año 2023, ubicado en áreas urbanas de la comuna de Isla de Maipo”</p>
      </Link>
      {/* Aprobaciones */}
      <h2 className="text-xl font-semibold mb-4">Aprobaciones</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aprobaciones.map((tramite) => (
          <Card 
            key={tramite.id} 
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle>{tramite.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{tramite.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/tramites/${tramite.id}`}>
                <Button 
                  variant="default" 
                  className="mt-auto transition-colors hover:bg-slate-400 hover:text-white"
                >
                  Ver documento
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Solicitudes */}
      <h2 className="text-xl font-semibold mb-4 mt-8">Solicitudes</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solicitudes.map((tramite) => (
          <Card 
            key={tramite.id} 
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle>{tramite.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{tramite.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/tramites/${tramite.id}`}>
                <Button 
                  variant="default" 
                  className="mt-auto transition-colors hover:bg-slate-400 hover:text-white"
                >
                  Ver documento
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TramitesPage;
