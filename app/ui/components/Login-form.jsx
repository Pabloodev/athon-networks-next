"use client";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/ui/components/Button";
import { Input } from "@/app/ui/components/Input";
import { Label } from "@/app/ui/components/Label";
import { useState } from "react";

import { sign } from "../../actions/auth";
import { useActionState } from "react";
import { EyeClosed, Eye } from "lucide-react";

const initialState = {
  message: "",
};

export function LoginForm({ className, ...props }) {
  const [state] = useActionState(sign, initialState);
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="grid gap-2">
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
          </div>
          <div className="flex gap-2">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="******"
              name="password"
              className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeClosed className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <p aria-live="polite">{state?.message}</p>

        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
    </form>
  );
}
