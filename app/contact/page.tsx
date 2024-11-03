"use client";
import React, { useState } from "react";
import "../globals.css";

const ContactSection: React.FC = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const isFormValid =
        formValues.name && formValues.email && formValues.message;

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
                            We’d love to hear from you! Reach out to us at any
                            of the following offices:
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Dhaka Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">
                                        Address:
                                    </span>{" "}
                                    Plot # 09, Road # 501, Sector # 7, Jolshiri
                                    Abashon, Rupganj, Narayanganj 1460
                                </p>
                            </div>

                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Corporate Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">
                                        Address:
                                    </span>{" "}
                                    Road # 6C, House # 83, Level # 4, Banani
                                    DOHS
                                </p>
                                <p className="text-sm dark:text-gray-300">
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    arshad@perksbd.com
                                </p>
                            </div>

                            <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg">
                                <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                    Japan Office
                                </h4>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">
                                        Address:
                                    </span>{" "}
                                    30-23 Matchubacho, Tokorozawa City, Saitama
                                    Prefecture, Japan 359-0044
                                </p>
                                <p className="text-sm mb-1 dark:text-gray-300">
                                    <span className="font-semibold">
                                        Phone:
                                    </span>{" "}
                                    04-2936-9310
                                </p>
                                <p className="text-sm dark:text-gray-300">
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    hfaperksbd@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-lg font-medium mb-2 dark:text-gray-100">
                                Follow Us
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                >
                                    {/* Facebook Icon */}
                                    <svg
                                        width="27"
                                        height="27"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.037 3.703 9.207 8.48 9.879v-6.988H8.188V12h2.292v-1.972c0-2.285 1.347-3.537 3.403-3.537.985 0 2.012.177 2.012.177v2.233H15.38c-1.236 0-1.618.768-1.618 1.556V12h2.75l-.439 2.891h-2.311v6.988C18.297 21.207 22 17.037 22 12z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                >
                                    {/* Twitter Icon */}
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557a9.797 9.797 0 01-2.828.775 4.93 4.93 0 002.165-2.725 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.38 4.482A13.949 13.949 0 011.671 3.149a4.918 4.918 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.582 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.918 4.918 0 004.597 3.417A9.867 9.867 0 010 20.072a13.911 13.911 0 007.548 2.213c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                >
                                    {/* Instagram Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm0 1.455c2.123 0 2.38.009 3.224.046.778.035 1.203.166 1.486.276.374.146.641.32.922.602.283.282.456.548.602.922.11.283.241.708.276 1.486.037.844.046 1.1.046 3.224s-.009 2.38-.046 3.224c-.035.778-.166 1.203-.276 1.486a2.451 2.451 0 0 1-.602.922 2.451 2.451 0 0 1-.922.602c-.283.11-.708.241-1.486.276-.844.037-1.1.046-3.224.046s-2.38-.009-3.224-.046c-.778-.035-1.203-.166-1.486-.276a2.451 2.451 0 0 1-.922-.602 2.451 2.451 0 0 1-.602-.922c-.11-.283-.241-.708-.276-1.486-.037-.844-.046-1.1-.046-3.224s.009-2.38.046-3.224c.035-.778.166-1.203.276-1.486.146-.374.32-.641.602-.922.282-.283.548-.456.922-.602.283-.11.708-.241 1.486-.276.844-.037 1.1-.046 3.224-.046zM8 3.887A4.113 4.113 0 1 0 8 12.113 4.113 4.113 0 0 0 8 3.887zm0 1.455a2.658 2.658 0 1 1 0 5.315 2.658 2.658 0 0 1 0-5.315zm5.13-.744a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="flex-1">
                        <h3 className="text-xl font-medium mb-4 dark:text-gray-100">
                            Send Us a Message
                        </h3>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium dark:text-gray-200"
                            >
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
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium dark:text-gray-200"
                            >
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
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium dark:text-gray-200"
                            >
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
                    disabled={!isFormValid}
                    className={`w-full px-4 py-2 text-white rounded ${
                        isFormValid
                            ? "hover:bg-darkblue-700 dark:hover:bg-darkblue-800"
                            : "bg-blue-400 cursor-not-allowed"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                    Send Message
                </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
