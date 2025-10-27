'use client'

import Image from "next/image";
import {motion} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";
import ChapterSelector from "@/components/ChapterSelector";

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
                        src="/image/cars.gif"
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
                        Perks Group
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        We have four chapters, and each one curates services tailored to its region. Click a chapter to explore the programs we deliver together.
                    </motion.p>

                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4">
                        <ChapterSelector />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
