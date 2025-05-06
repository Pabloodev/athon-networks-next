// app/api/invoices/route.js

import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value;
  const password = cookieStore.get("password")?.value;

  if (!username || !password) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const response = await fetch("http://10.28.18.58:7047/api/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return Response.json(data);
}