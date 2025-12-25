'use client'

import Image from "next/image";
import {Button} from "./ui/button";
import {ArrowUpRight} from "lucide-react";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";
import {motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className='container section-padding text-center lg:text-left lg:flex gap-8 lg:justify-between lg:items-center'>
            {/* Left Section */}
            <div className='flex-1 space-y-6'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='body-sm tracking-widest uppercase text-primary-600 dark:text-primary-400 font-semibold'>
                    Perks Group
                </motion.p>

                <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='display-lg text-neutral-900 dark:text-neutral-50'>
                    Welcome to<br/>Perks Group
                </motion.h1>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='body-lg text-neutral-600 dark:text-neutral-400 max-w-2xl'>
                    A conglomerate of companies
                    dedicated to excellence and making a positive impact in various
                    domains. We are driven by a shared commitment to quality,
                    sustainability, and social responsibility. Our group comprises Perks
                    Auto, Perks Tex, Perks Charity, Perks Agro, Perks Sports and Perks Solutions, each
                    specializing in their unique field while embodying our core values.
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="flex gap-4 flex-wrap justify-center lg:justify-start"
                >
                    <Button variant="premium" size="lg" asChild>
                        <Link href="/services">
                            Explore Services <ArrowUpRight className="w-5 h-5 ml-2"/>
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/about">
                            Learn More
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Right Image Section */}
            <div className='flex-1 lg:flex lg:justify-end'>
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                >
                    <Image
                        src="/image/11.jpg"
                        width={800}
                        height={500}
                        alt="Perks Group - International Trading Excellence"
                        priority
                        className="rounded-2xl shadow-2xl xl:h-[448px] xl:w-[600px] lg:h-[344px] lg:w-[500px] hidden lg:block object-cover"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection