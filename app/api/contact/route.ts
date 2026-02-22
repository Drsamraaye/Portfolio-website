import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // 1. Habaynta adeegga Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // 2. Qoraalka email-ka la dirayo
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Sends the email to yourself
            subject: `Fariin Cusub: ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #ff0048;">Fariin Cusub oo ka timi Website-ka</h2>
                    <p><strong>Magaca:</strong> ${name}</p>
                    <p><strong>Email-ka:</strong> ${email}</p>
                    <p><strong>Fariinta:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #ff0048;">
                        ${message}
                    </div>
                </div>
            `,
        };

        // 3. Dirista email-ka
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ error: "Email-ku ma dirmin" }, { status: 500 });
    }
}
