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

const TramiteCard = () => {
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
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/aprobacion-recepcion-de-urbanizacion.pdf",
      },
      {
        name: "Solicitud de permiso obra menor",
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/solicitud-de-permiso-obra-menor.pdf",
      },
      {
        name: "Solicitud de recepción",
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/solicitud-de-recepcion.pdf",
      },
      {
        name: "Solicitud informes previos",
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/solicitud-inf-previos.pdf",
      },
      {
        name: "Solicitud número y afectación",
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/solicitud-numero-y-afectacion.pdf",
      },
      {
        name: "Solicitud de subdivisión",
        url: "https://www.islademaipo.cl/wp-content/uploads/2014/12/solisitud-de-subdivision.pdf",
      },
  ];

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle>Trámites disponibles</CardTitle>
        <CardDescription>
          Selecciona un trámite para acceder al documento correspondiente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tramites.map((tramite, index) => (
            <li key={index}>
              <a
                href={tramite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {tramite.name}
              </a>
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

export default TramiteCard;
