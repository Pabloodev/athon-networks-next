import { cookies } from "next/headers";

export async function POST(req) {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value;
  const password = cookieStore.get("password")?.value;

  if (!username || !password) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json(); // <- PEGA O BODY ENVIADO PELO FORM

  const data = {
    username,
    password,
    subject: body.subject,
    message: body.message,
    priority: body.priority,
  };

  const response = await fetch("http://10.28.18.110:7047/api/create-tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  return Response.json(responseData, { status: response.status });
}
