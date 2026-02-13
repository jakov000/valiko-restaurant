import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, date, guests, type, message } = data;

        // Validation (basic)
        if (!name || !email || !type) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer transporter
        // In a real production app, these values should come from process.env
        // For development without env vars, we can log to console or use a test account (Ethereal)

        // Sanitize password (remove spaces if user copied them by mistake)
        const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '') || '';

        console.log('Attempting to send email...');
        console.log('SMTP Config:', {
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || '587',
            secure: process.env.SMTP_SECURE,
            user: process.env.SMTP_USER,
            passLength: smtpPass ? smtpPass.length : 0 // Log length to verify it's being read
        });

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to Gmail if not set
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // Your email address
                pass: smtpPass, // Your app password (spaces removed)
            },
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || '"Restaurant Lori Website" <noreply@restaurant-lori.com>',
            to: process.env.RECIPIENT_EMAIL || 'LoriGbr.info@gmail.com', // recipient from request
            subject: `Neue Anfrage: ${type} - ${name}`,
            text: `
                Neue Kontaktanfrage über die Website:
                
                Name: ${name}
                Email: ${email}
                Telefon: ${phone}
                Anlass: ${type}
                Datum: ${date}
                Gäste: ${guests}
                
                Nachricht:
                ${message}
            `,
            html: `
                <h2>Neue Anfrage über die Website</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Telefon:</strong> ${phone}</li>
                    <li><strong>Anlass:</strong> ${type}</li>
                    <li><strong>Datum:</strong> ${date}</li>
                    <li><strong>Anzahl Gäste:</strong> ${guests}</li>
                </ul>
                <h3>Nachricht:</h3>
                <p>${message}</p>
            `,
        };

        // If credentials are provided, send email
        if (process.env.SMTP_USER && smtpPass) {
            try {
                // Verify connection configuration
                await new Promise((resolve, reject) => {
                    transporter.verify(function (error, success) {
                        if (error) {
                            console.log('SMTP Connection Verify Error:', error);
                            reject(error);
                        } else {
                            console.log('SMTP Connection verified');
                            resolve(success);
                        }
                    });
                });

                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
                return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
            } catch (smtpError: any) {
                console.error('SMTP Error:', smtpError);
                return NextResponse.json({ error: `SMTP Error: ${smtpError.message || smtpError}` }, { status: 500 });
            }
        } else {
            console.log('---------------------------------------------------');
            console.log('⚠️  NO SMTP CREDENTIALS CONFIGURED - LOGGING EMAIL  ⚠️');
            console.log('To send real emails, configure .env with SMTP_USER & SMTP_PASS');
            console.log('Content:', mailOptions);
            console.log('---------------------------------------------------');

            // Simulating success for the frontend in dev mode
            return NextResponse.json({ message: 'Simulated success (check server logs)' }, { status: 200 });
        }

    } catch (error: any) {
        console.error('Error handling contact form:', error);
        return NextResponse.json({ error: `Internal Server Error: ${error.message}` }, { status: 500 });
    }
}
