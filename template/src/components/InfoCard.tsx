import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const InfoCard = () => {
  const tramites = [
    {
      name: "Aprobación O.M. ampliación Vivienda Social",
      url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/aprobacion-O.M.-ampliacion-V.-social.pdf",
    },
    {
      name: "Aprobación obra menor",
      url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/aprobacion-obra-menor.pdf",
    },
    {
      name: "Aprobación recepción de urbanización",
      url: "/docs/aprobacion-recepcion-urbanizacion.pdf",
    },
    {
      name: "Solicitud de permiso obra menor",
      url: "/docs/solicitud-permiso-obra-menor.pdf",
    },
    {
      name: "Solicitud de recepción",
      url: "/docs/solicitud-recepcion.pdf",
    },
    {
      name: "Solicitud informes previos",
      url: "/docs/solicitud-informes-previos.pdf",
    },
    {
      name: "Solicitud número y afectación",
      url: "/docs/solicitud-numero-afectacion.pdf",
    },
    {
      name: "Solicitud de subdivisión",
      url: "/docs/solicitud-subdivision.pdf",
    },
  ];

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle>Información</CardTitle>
        <CardDescription>
          Información útil sobre este departamento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tramites.map((tramite, index) => (
            <li key={index}>
              <Link
                href={tramite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {tramite.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href="/tramites"
          className="text-sm text-gray-600 hover:underline"
        >
          Ver listado completo
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
