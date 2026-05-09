import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // LOGIC: Send to Google Sheets / Email Service
    // For now, we log to console. 
    // Recommended: Use a service like SheetDB (sheetdb.io) or Formspree.
    console.log('New Contact Form Submission:', data);

    /* 
    Example for SheetDB:
    await fetch('https://sheetdb.io/api/v1/YOUR_API_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [data] })
    });
    */

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
