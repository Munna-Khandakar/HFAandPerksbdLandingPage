'use client'

import Image from "next/image";
import {motion} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";

const AboutComponent = () => {
    return (
        <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                >
                    <Image
                        src="/image/13.jpg"
                        width={900}
                        height={500}
                        alt="About"
                        className="max-md:hidden clipped-corners"
                    />
                </motion.div>

                <div className="items-center">
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        Services we offer
                    </motion.h2>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="px-12 tracking-wider uppercase text-gray-400 mt-3">
                        Be with PERKS and avail the perks
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        In the heart of our journey lies a commitment to excellence,
                        sustainability, and making a positive impact. This is the story of
                        Perks Group—a conglomerate of companies dedicated to
                        bringing about meaningful change and pioneering innovation
                        across various industries.
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4">
                        At HFA & Perks BD, our vision is to pioneer a path to a sustainable,
                        inclusive, and thriving future for all. Our vision encapsulates our
                        aspirations, guiding our actions, and inspiring our commitment to
                        excellence in every endeavor.
                        Our Services include:
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent