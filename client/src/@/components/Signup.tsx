import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"

  import { Button } from "./ui/button"
  import { Input } from "./ui//input"
import { Label } from "./ui/label"
import { Icons } from "./ui/icons"

// src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
const Signup: React.FC = () => {
    return (
        <Card className="mt-20 w-80">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Iniciar Sesion</CardTitle>
                <CardDescription>
                    Escribe tu email de empresa
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-6">
                <Button className="w-full" variant="outline">
                    <Icons.google className="mr-2 h-4 w-4" />
                    Google
                </Button>
                </div>
                <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 text-accent-foreground">
                    O continua con
                    </span>
                </div>
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Mail</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">Entrar</Button>
            </CardFooter>
        </Card>
    );
};

export default Signup;