// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  // Set up your email sending logic here
  return new Response('Email sent successfully');
}
