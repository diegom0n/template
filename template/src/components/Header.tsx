"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  { tramiteId: "1", title: "Aprobación O.M. ampliación Vivienda Social"},
  { tramiteId: "2", title: "Aprobación obra menor"},
  { tramiteId: "3", title: "Aprobación recepción de urbanización"},
  { tramiteId: "4", title: "Solicitud de permiso obra menor"},
  { tramiteId: "5", title: "Solicitud de recepción"},
  { tramiteId: "6", title: "Solicitud informes previos"},
  { tramiteId: "7", title: "Solicitud número y afectación"},
  { tramiteId: "8", title: "Solicitud de subdivisión"},
  { tramiteId: "/", title: "Ver Todos"},
];

export function NavigationMenuDemo() {
  return (
    <div className="bg-gray-100">
      <header className="flex items-center justify-center h-16 bg-white shadow-md">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap items-center justify-between px-4 sm:flex-nowrap">
            {/* Inicio */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Sobre Nosotros */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:grid-cols-1 md:w-[350px] md:grid-cols-2 lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image src="/logo.png" alt="Logo" width={240} height={240} />
                      <div className="mb-2 mt-4 text-lg font-medium">Isla de Maipo</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Departamento de Obras Municipalidad Isla de Maipo.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Introducción">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem href="/" title="Historia">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem href="/" title="Misión">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Formularios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger><Link href="/tramites">Formularios</Link></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:grid-cols-1 md:w-[400px] md:grid-cols-2 lg:w-[600px] lg:grid-cols-3">
                  {components.map((component) => (
                    <ListItem
                      key={component.tramiteId}
                      title={component.title}
                      href={`/tramites/${component.tramiteId}`}
                    >
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
