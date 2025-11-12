"use client";
import {TbArrowUpRight} from "react-icons/tb";
import {Button} from "./ui/button";

import {motion} from "framer-motion";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import Image from "next/image";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";

export default function CatalogSwiperSection() {
    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Successful Stories
                    </motion.h1>

                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="pb-6 text-xl font-bold tracking-wider mt-5">Pioneering a Path to a Sustainable,
                        Inclusive, and Thriving Future
                    </motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid grid-cols-2 text-gray-500 gap-x-8">
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

                <a href="/gallery">
                    <Button
                        className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">View
                        Gallery <TbArrowUpRight className="w-5 h-5 ml-2"/> </Button>
                </a>
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
                        alt="Swiper"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-fit"
                        unoptimized={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/1.jpg"
                        alt="Swiper"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-fit"
                        unoptimized={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/2.jpg"
                        alt="Swiper"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-fit"
                        unoptimized={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/japan-night.jpeg"
                        alt="Swiper"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-fit"
                        unoptimized={true}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src="/image/3.jpg"
                        alt="Swiper"
                        width={520}
                        height={320}
                        className="w-full h-[320px] object-fit"
                        unoptimized={true}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}