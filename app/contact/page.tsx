"use client";

import React, { useState } from "react";
import "../globals.css";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const ContactSection: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        type: "success" | "error" | "";
        message: string;
    }>({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const isFormValid =
        formValues.name && formValues.email && formValues.message;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid || isSubmitting) return;

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            console.log("Submitting form data:", formValues);

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Message sent successfully!",
                });
                setFormValues({ name: "", email: "", message: "" });
            } else {
                throw new Error(data.error || data.message || "Failed to send message");
            }
        } catch (error: any) {
            console.error("Form submission error:", error);
            setStatus({
                type: "error",
                message: `Error: ${error.message}. Please try again later.`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-12 lg:px-24 text-gray-900 dark:text-gray-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8 dark:text-gray-100">
                    Contact Us
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h3 className="text-xl font-medium mb-4 dark:text-gray-100">
                            Contact Information
                        </h3>
                        <p className="mb-6 dark:text-gray-300">
                            We’d love to hear from you! Reach out to us at any of the following offices:
                        </p>

                        <div className="space-y-6">
                            {/* Office Information Sections */}
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Dhaka Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> Plot # 09, Road # 501, Sector # 7, Jolshiri Abashon, Rupganj, Narayanganj 1460
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Corporate Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> Road # 6C, House # 83, Level # 4, Banani DOHS
                                </p>
                                <p className="text-sm dark:text-gray-300">
                                    <span className="font-semibold">Email:</span> arshad@perksbd.com
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Japan Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> 30-23 Matchubacho, Tokorozawa City, Saitama Prefecture, Japan 359-0044
                                </p>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Phone:</span> 04-2936-9310
                                </p>
                                <p className="text-sm dark:text-gray-300">
                                    <span className="font-semibold">Email:</span> hfaperksbd@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1">
                        <h3 className="text-xl font-medium mb-4 dark:text-gray-100">
                            Send Us a Message
                        </h3>

                        {status.message && (
                            <div className={`mb-4 p-3 rounded ${status.type === "success" ? "bg-green-200 dark:bg-green-700" : "bg-red-200 dark:bg-red-700"}`}>
                                <p className="text-sm dark:text-gray-200">{status.message}</p>
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium dark:text-gray-200">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg dark:text-gray-200"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium dark:text-gray-200">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg dark:text-gray-200"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium dark:text-gray-200">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formValues.message}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg dark:text-gray-200"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={`w-full px-4 py-2 text-white rounded ${isFormValid && !isSubmitting ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900" : "bg-blue-400 cursor-not-allowed"}`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
