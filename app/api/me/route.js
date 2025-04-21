"use server"

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies(); // você espera o cookies() primeiro
  const user = cookieStore.get("username")?.value; // depois acessa o valor
  return NextResponse.json({ user });
}