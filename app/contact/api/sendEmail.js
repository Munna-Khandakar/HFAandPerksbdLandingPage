import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        console.log("Invalid request method:", req.method);
        return res.status(405).send({ message: "Only POST requests allowed" });
    }

    const { name, email, message } = req.body;

    console.log("Received data:", { name, email, message });

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "your_email@example.com", // Replace with actual recipient
            subject: `Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        };

        console.log("Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending email" });
    }
}
