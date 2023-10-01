import { prisma } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.category.findMany();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  if (request) {
    console.log(request);
  }
  // const data = await prisma.category.create({ data: request.body });
}
