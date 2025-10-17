import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET – fetch all bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookings, { status: 200 });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST – create new booking
export async function POST(request: Request) {
  try {
    const { name, email, phone, lessonType, notes } = await request.json();

    if (!name || !email || !lessonType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }


    return NextResponse.json(
      { message: "Booking created successfully", booking: await prisma.booking.create({
          data: {
            name,
            email,
            phone,
            lessonType,
            notes,
          },
        }) },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating booking:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}





