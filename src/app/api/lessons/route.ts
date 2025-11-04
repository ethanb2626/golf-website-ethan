import { NextResponse } from "next/server";
import type { Lessons } from "@/types/lessons";

export async function GET() {
  const lessons: Lessons[] = [
    { id: 1, title: "Chipping Basics", duration: "30min" },
    { id: 2, title: "Driving Techniques", duration: "45min" },
  ];
  return NextResponse.json(lessons);
}

