"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function sign(formData) {
  const username = formData.get("user");
  const password = formData.get("password");

  const res = await fetch("http://10.28.18.58:7047/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json(); // Captura a mensagem de erro do servidor
    return { error: errorData?.message || "Login inválido!" }; // Retorna o erro
  }

  const { token } = await res.json();

  await cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  console.log(token);

  redirect("/client"); // Redireciona após login
}

export async function logout(params) {
  
}