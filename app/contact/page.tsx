"use client";

import React, {useState} from "react";
import {PageHero} from "@/components/layout/PageHero";
import {PageSection} from "@/components/layout/PageSection";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {MapPin, Phone, Mail} from "lucide-react";
import type { Metadata } from "next";

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
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch with our team across the globe."
            />

            <PageSection>
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="h3 mb-4 text-neutral-900 dark:text-neutral-50">
                                    Our Offices
                                </h3>
                                <p className="body-lg text-neutral-600 dark:text-neutral-400 mb-8">
                                    Reach out to us at any of our global locations.
                                </p>
                            </div>

                            {/* Dhaka Office */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary-600" />
                                        Dhaka Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400">
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Address:</span> Plot # 09, Road # 501, Sector # 7,
                                        Jolshiri Abashon, Rupganj, Narayanganj 1460
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Corporate Office */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary-600" />
                                        Corporate Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400">
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Address:</span> Shop No. 11, Level 5, Mirpur DOHS
                                        Shopping Complex, Dhaka - 1216
                                    </p>
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary-600" />
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Email:</span> arshad@perksbd.com, info@perksbd.com
                                    </p>
                                    <div className="flex gap-3 mt-4 flex-wrap">
                                        <Button asChild variant="outline" size="sm">
                                            <a href="https://wa.me/+8801914402240" target="_blank" rel="noopener noreferrer">
                                                WhatsApp
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" size="sm">
                                            <a href="https://www.facebook.com/PreksGP" target="_blank" rel="noopener noreferrer">
                                                Facebook
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" size="sm">
                                            <a href="https://wa.me/+8801769006260" target="_blank" rel="noopener noreferrer">
                                                WhatsApp
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Japan Office */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary-600" />
                                        Japan Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400">
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Address:</span> Saitama Ken, Tokorozawa Shi, Kamiyamaguchi 1686, Japan
                                    </p>
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-primary-600" />
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Tel:</span> 042936-9310
                                    </p>
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400">
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Fax:</span> 04-2936-9621
                                    </p>
                                    <p className="body-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary-600" />
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-50">Email:</span> hfaperksbd@gmail.com
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send Us a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {status.message && (
                                            <div
                                                className={`p-4 rounded-lg ${
                                                    status.type === "success"
                                                        ? "bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800"
                                                        : "bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 border border-red-200 dark:border-red-800"
                                                }`}
                                            >
                                                <p className="body-sm">{status.message}</p>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="name" className="block body-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block body-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                                                Email
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                value={formValues.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block body-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                value={formValues.message}
                                                onChange={handleInputChange}
                                                rows={5}
                                                placeholder="Tell us how we can help you..."
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={!isFormValid || isSubmitting}
                                            className="w-full"
                                            variant="premium"
                                            size="lg"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </PageSection>
        </>
    );
};

export default ContactSection;
