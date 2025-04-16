"use server"
import { redirect } from "next/navigation"

export async function sign(formData) {
  const username = formData.get("user")
  const password = formData.get("password")

  const res = await fetch("http://10.28.18.58:7047/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })

  const data = await res.json()
  console.log(data)

  if (data.token) {
    redirect("/client") // isso é esperado e normal
  }

  // se não tiver token, podemos lançar um erro customizado
  throw new Error("Usuário ou senha inválidos")
}
