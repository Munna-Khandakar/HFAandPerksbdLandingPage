'use client'

import Image from "next/image";
import {Button} from "./ui/button";
import {TbArrowUpRight} from "react-icons/tb";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";
import {motion} from "framer-motion";

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex gap-2 lg:justify-between'>
            {/* Left Section */}
            <div className='flex-1 xl:py-14 lg:py-8'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='tracking-widest uppercase'>
                    HFA and Perks Bd Co. Ltd
                </motion.p>

                <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='h1'>
                    Be with PERKS and <br/>avail the perks
                </motion.h1>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='pb-6 text-muted-foreground text-justify xl:pb-10'>
                    Welcome to HFA and PerksBD, a conglomerate of companies
                    dedicated to excellence and making a positive impact in various
                    domains. We are driven by a shared commitment to quality,
                    sustainability, and social responsibility. Our group comprises Perks
                    Auto, Perks Tex, Perks Charity, Perks Agro, and Perks Solutions, each
                    specializing in their unique field while embodying our core values.
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <Button
                        className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        Book now <TbArrowUpRight className="w-5 h-5 ml-2"/>
                    </Button>
                </motion.div>
            </div>

            {/* Right Image Section */}
            <div className='flex-1'>
                <Image
                    src="/image/11.jpg"
                    width={800}
                    height={500}
                    alt=""
                    unoptimized={true}
                    className="clipped-corners right-20 xl:h-[448px] xl:w-[600px] lg:h-[344px] lg:w-[500px] hidden lg:block"
                />
            </div>
        </div>
    )
}

export default HeroSection