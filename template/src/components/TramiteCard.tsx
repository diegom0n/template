import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FiFileText } from "react-icons/fi"; // Importa un ícono de ejemplo

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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tramites.map((tramite, index) => (
        <Link
          key={index}
          href={tramite.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer w-full aspect-square lg:w-[400px]">
            <CardContent className="flex flex-col items-center justify-center">
              {/* Ícono en el centro */}
              <div className="flex justify-center items-center text-gray-500 group-hover:text-blue-500">
                <FiFileText size={96} />
              </div>
            </CardContent>
            {/* Nombre del trámite como título */}
            <CardHeader className="text-center mt-4">
              <CardTitle className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 lg:text-lg">
                {tramite.name}
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default TramiteCard;
