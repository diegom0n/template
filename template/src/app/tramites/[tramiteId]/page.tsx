'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Usa useSearchParams para acceder a los parámetros de búsqueda en Next.js 13+
import { Button } from "@/components/ui/button"; // Asegúrate de tener este componente configurado

// Definir tipos específicos para el tramite
interface TramiteData {
  title: string;
  description: string;
  steps: string[];
  pdfUrl: string;
}

const TramiteDetailsPage = () => {
  const searchParams = useSearchParams(); // Usamos useSearchParams para obtener parámetros de búsqueda
  const tramiteId = searchParams?.get('tramiteId'); // Accedemos al parámetro 'tramiteId' desde la URL

  // Utilizamos un tipo específico para tramiteData
  const [tramiteData, setTramiteData] = useState<TramiteData | null>(null); // Datos del trámite
  const [file, setFile] = useState<File | null>(null); // Archivo seleccionado para subir
  const [isFileUploaded, setIsFileUploaded] = useState(false); // Estado para saber si el archivo fue subido

  // Lógica para obtener los datos del trámite
  useEffect(() => {
    if (!tramiteId) return;

    const tramiteDataFromApi: Record<string, TramiteData> = {
      "1": {
        title: "Autorización para vehículos con sobrepeso",
        description: "Este trámite permite que los vehículos con sobrepeso y/o sobredimensionados circulen por caminos públicos bajo ciertas condiciones. Aquí se detallan los requisitos y pasos para solicitar esta autorización.",
        steps: [
          "Paso 1: Completar formulario de solicitud.",
          "Paso 2: Ingresar datos del vehículo y del conductor.",
          "Paso 3: Enviar solicitud y esperar aprobación.",
        ],
        pdfUrl: "https://www.islademaipo.cl/wp-content/uploads/2014/12/aprobacion-O.M.-ampliacion-V.-social.pdf",
      },
      // Agrega más trámites si es necesario
    };

    const tramite = tramiteDataFromApi[tramiteId];
    if (tramite) {
      setTramiteData(tramite);
    }
  }, [tramiteId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFile(file);
      setIsFileUploaded(false); // Reset estado de carga
    }
  };

  const handleFileUpload = () => {
    if (file) {
      // Aquí puedes manejar la subida del archivo (enviar a un servidor o almacenarlo localmente)
      console.log("Archivo subido:", file.name);
      setIsFileUploaded(true);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{tramiteData?.title}</h1>
      <p className="text-lg mb-4">{tramiteData?.description}</p>

      {/* Pasos para el trámite */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Pasos para realizar el trámite</h2>
        <ul className="list-decimal pl-6">
          {tramiteData?.steps?.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ul>
      </div>

      {/* Enlace al PDF para ver o descargar */}
      <div className="mb-6">
        <a href={tramiteData?.pdfUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="mb-4">Ver documento PDF</Button>
        </a>
      </div>

      {/* Formulario para subir un archivo */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Subir archivo descargado</h2>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.docx,.jpg,.png" // Define los tipos de archivo permitidos
          className="mb-4"
        />
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            onClick={handleFileUpload}
            disabled={!file}
            className="bg-blue-500 text-white"
          >
            Subir archivo
          </Button>
          {isFileUploaded && (
            <span className="text-green-600">Archivo subido exitosamente</span>
          )}
        </div>
      </div>

      {/* Instrucciones para la descarga y subida */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Instrucciones</h2>
        <p className="text-lg">
          1. Descargue el documento en formato PDF usando el botón Ver documento PDF.<br />
          2. Una vez descargado, complete los pasos indicados en las instrucciones del trámite.<br />
          3. Luego, cargue el archivo descargado en el formulario de Subir archivo descargado para completar su solicitud.<br />
          4. Asegúrese de que el archivo esté en uno de los formatos permitidos (.pdf, .docx, .jpg, .png).
        </p>
      </div>
    </div>
  );
};

export default TramiteDetailsPage;
