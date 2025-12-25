'use client';

import Link from "next/link";
import {Input} from "./ui/input";
import {motion} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";


export default function Footer() {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-900">
            <div className="container lg:grid lg:grid-cols-2 py-16">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    >
                        <h2 className="h5 pb-4 uppercase text-neutral-900 dark:text-neutral-50">Company</h2>
                        <div className="flex flex-col">
                            <Link href='/about' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Press</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</Link>
                            <Link href='/contact' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                    >
                        <h2 className="h5 pb-4 uppercase text-neutral-900 dark:text-neutral-50">Development</h2>
                        <div className="flex flex-col">
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Documentation</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Reference</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Changelog</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Status</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <h2 className="h5 pb-4 uppercase text-neutral-900 dark:text-neutral-50">Connect</h2>
                        <div className="flex flex-col">
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Instagram</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Twitter</Link>
                            <Link href='/' className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">LinkedIn</Link>
                            <Link href='https://www.facebook.com/profile.php?id=61563843784308'
                                  className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Facebook</Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                >
                    <p className="h5 pb-4 text-neutral-900 dark:text-neutral-50">Stay Updated</p>
                    <div className="relative lg:max-w-sm">
                        <Input type='email' id='email' placeholder="Email Address"/>
                        <button
                            className="absolute bg-primary text-white rounded-full h-10 px-4 text-sm top-2 right-2 hover:bg-primary-600 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                    <p className="pt-4 body-sm text-neutral-500 dark:text-neutral-400">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will
                        be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any
                        time.
                    </p>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="py-10 bg-neutral-900 dark:bg-neutral-950">
                <div className="container text-white text-center lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p className="body-sm">&copy; 2024 Perks Group All Rights Reserved. [ Tech support from <a
                            target="_blank"
                            className="hover:text-primary-400 transition-colors"
                            href="https://docs.google.com/forms/d/1j8BKp_AQLRbZdK2m3PhFn-IvVkWodkfryZRhkO5p-Vs">
                            Perks Tech.</a> ]</p>
                    </div>
                    <div>
                        <Link className="p-4 hover:text-primary-400 transition-colors body-sm" href='/'>Privacy</Link>
                        <Link className="p-4 hover:text-primary-400 transition-colors body-sm" href='/'>Terms</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
} 