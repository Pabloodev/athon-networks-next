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
    return {message: "Login ou senha incorreto"}
  }

  const { token } = await res.json();

  console.log(token)

  await cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  await cookies().set("username", username); // Agora salva o nome do usuário

  redirect("/client");
}