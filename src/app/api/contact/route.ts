import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!GOOGLE_SCRIPT_URL) {
      console.log('No GOOGLE_SCRIPT_URL configured. Submission:', data);
      return NextResponse.json({ message: 'Success (logged only)' }, { status: 200 });
    }

    // Send to Google Sheets + Email via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow', // Google Apps Script redirects on POST
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}
