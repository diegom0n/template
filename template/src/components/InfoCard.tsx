import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InfoCard = () => {
  
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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae officia, tempore similique totam quibusdam modi reiciendis enim earum rem quos aliquam dolorem laudantium quas aliquid quis incidunt nulla asperiores!</p>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">

      </CardFooter>
    </Card>
  );
};

export default InfoCard;
