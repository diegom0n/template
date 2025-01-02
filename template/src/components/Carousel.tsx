"use client"; // Asegura que se ejecute en el cliente

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

export function CarouselDemo() {
  // Array de imágenes
  const images = [
    "/obras.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
  ];

  return (
    <div className="relative w-[1200px] overflow-hidden">
      <Carousel
        className="w-full"
        opts={{
          loop: true, // Activa el bucle
        }}
        plugins={[
          Autoplay({ delay: 3000 }),
        ]}
      >
        <CarouselContent className="flex">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full"
              style={{ width: "100vw" }} // Asegura que cada imagen ocupe el ancho de la pantalla
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill" // Ocupa todo el contenedor
                  objectFit="cover" // Ajusta la imagen para que llene el espacio
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10">
          Next
        </CarouselNext>
      </Carousel>
    </div>
  );
}
