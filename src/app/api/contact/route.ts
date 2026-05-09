import { NextResponse } from 'next/server';

// Replace this with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (GOOGLE_SCRIPT_URL) {
      // Send to Google Sheets + Email via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Google Script returned an error');
      }
    } else {
      // Fallback: log to console if URL not configured yet
      console.log('New Contact Form Submission (no Google Script URL configured):', data);
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}
