"use server"

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const user = cookies().get("username")?.value;
  return NextResponse.json({ user });
}