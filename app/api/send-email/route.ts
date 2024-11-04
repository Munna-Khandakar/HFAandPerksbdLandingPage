import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    console.log('Starting email send process...');
    
    try {
        console.log('Environment Check:', {
            hasService: !!process.env.EMAIL_SERVICE,
            hasUser: !!process.env.EMAIL_USER,
            hasPass: !!process.env.EMAIL_PASS,
            hasRecipient: !!process.env.EMAIL_RECIPIENT
        });

        const { name, email, message } = await request.json();
        console.log('Received form data:', { name, email, messageLength: message?.length });

        if (!process.env.EMAIL_SERVICE || 
            !process.env.EMAIL_USER || 
            !process.env.EMAIL_PASS || 
            !process.env.EMAIL_RECIPIENT) {
            throw new Error('Missing required environment variables');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log('Verifying transporter...');
        await transporter.verify();
        console.log('Transporter verified successfully');

        // 6. Prepare email options
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New Contact Form Message from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // 7. Send email
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId
        }, { status: 200 });

    } catch (error: any) {
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            response: error.response
        });

        return NextResponse.json({
            success: false,
            message: 'Failed to send email',
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? {
                code: error.code,
                response: error.response
            } : undefined
        }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Email API endpoint is working',
        time: new Date().toISOString()
    });
}