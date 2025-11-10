"use client";

import React, {useState} from "react";
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
    }>({type: "", message: ""});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {id, value} = e.target;
        setFormValues({...formValues, [id]: value});
    };

    const isFormValid =
        formValues.name && formValues.email && formValues.message;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid || isSubmitting) return;

        setIsSubmitting(true);
        setStatus({type: "", message: ""});

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
                setFormValues({name: "", email: "", message: ""});
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
        <section
            className="contact-section bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-12 lg:px-24 text-gray-900 dark:text-gray-200">
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
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg fade-in-up">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Dhaka Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> Plot # 09, Road # 501, Sector # 7,
                                    Jolshiri Abashon, Rupganj, Narayanganj 1460
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg fade-in-up">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Corporate Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> Shop No. 11, Level 5, Mirpur DOHS
                                    Shopping Complex, Dhaka - 1216
                                </p>
                                <p className="text-sm dark:text-gray-300">
                                    <span className="font-semibold">Email:</span> arshad@perksbd.com, info@perksbd.com
                                </p>
                                <div className="flex gap-4 mt-4 flex-col md:flex-row">
                                    <a
                                        href="https://wa.me/+8801914402240"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                    <a
                                        href="https://www.facebook.com/PreksGP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                        Facebook
                                    </a>
                                    <a
                                        href="https://wa.me/+8801769006260"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>

                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg fade-in-up">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Japan Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> Saitama Ken, Tokorozawa Shi, Kamiyamaguchi 1686, Japan
                                </p>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Tel:</span> 042936-9310
                                </p>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">Fax:</span> 04-2936-9621
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
                            <div
                                className={`mb-4 p-3 rounded ${status.type === "success" ? "bg-green-200 dark:bg-green-700" : "bg-red-200 dark:bg-red-700"}`}>
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
