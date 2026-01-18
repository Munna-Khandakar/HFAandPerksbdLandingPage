"use client";
import {ArrowUpRight} from "lucide-react";
import {Button} from "./ui/button";
import Link from "next/link";
import {motion} from "framer-motion";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import Image from "next/image";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";

export default function CatalogSwiperSection() {
    return (
        <div className="section-padding bg-neutral-50 dark:bg-neutral-900">
            <div className="container grid pb-8 lg:grid-cols-1 gap-8">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="display-md text-neutral-900 dark:text-neutral-50">Successful Stories
                    </motion.h1>

                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="h3 mt-4 text-neutral-700 dark:text-neutral-300">Pioneering a Path to a Sustainable,
                        Inclusive, and Thriving Future
                    </motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid md:grid-cols-2 gap-8 body-lg text-neutral-600 dark:text-neutral-400">
                    <p>
                        We are dedicated to establishing and achieving
                        ambitious goals that reflect our mission and vision. These targets
                        guide our collaborative efforts across all our businesses and
                        initiatives.
                    </p>
                    <p>
                       Our vision is to pioneer a path to a sustainable, inclusive, and thriving
                        future for all. Our vision encapsulates our aspirations, guiding our actions, and inspiring our
                        commitment to excellence in every endeavor.
                    </p>
                </motion.div>

                <Button variant="premium" size="lg" asChild>
                    <Link href="/gallery">
                        View Gallery <ArrowUpRight className="w-5 h-5 ml-2"/>
                    </Link>
                </Button>
            </div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image
                        src="/image/japan-day.jpeg"
                        alt="Perks Group Japan operations day view"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/11.jpg"
                        alt="Perks Group international operations"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/japan-night.jpeg"
                        alt="Perks Group Japan operations night view"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-cover rounded-xl"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src="/image/10.jpg"
                        alt="Import export services showcase"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-cover rounded-xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}