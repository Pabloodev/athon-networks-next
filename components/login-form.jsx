"use client";

import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { sign } from "./../app/actions/auth";

export function LoginForm({ className, ...props }) {

  return (
    <form
      action={sign}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <p className="text-muted-foreground text-sm text-balance text-white">
          Faça o login para acessar o painel do cliente.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="user">User</Label>
          <Input
            id="user"
            type="text"
            placeholder="joao.colaborator"
            required
            name="user"
            className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Input
            id="password"
            type="text"
            required
            placeholder="******"
            name="password"
            className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
          />
        </div>

        <div className="flex items-center">
          <Link href="/register" className="text-sm">
            Ainda não tem um cadastro? Registre-se
          </Link>
        </div>

        

        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
    </form>
  );
}
