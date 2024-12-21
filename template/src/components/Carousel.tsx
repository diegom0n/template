import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  // Array of image URLs
  const images = [
    "/images/img.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
  ];

  return (
    <div className="relative w-full max-w-4xl px-10">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{ height: "360px" }} // Fixed height for carousel
                  >
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      layout="fill" // Ensures the image covers the container
                      objectFit="contain" // Preserves the image's aspect ratio
                      className="rounded-lg"
                      priority={index === 0} // Priority loading for the first image
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
          Next
        </CarouselNext>
      </Carousel>
    </div>
  );
}
