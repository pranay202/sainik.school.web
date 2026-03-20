import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would store this in a database or CRM here.
    console.log("New admission received:", data);

    return NextResponse.json(
      { success: true, message: "Admission application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing admission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
