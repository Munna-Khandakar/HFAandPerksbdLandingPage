'use client'

import Image from "next/image";
import {Button} from "./ui/button";
import {ArrowUpRight} from "lucide-react";
import {motion} from "framer-motion";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Slide data configuration
const heroSlides = [
    {
        image: '/image/slider/cars.avif',
        tag: 'Automotive Solutions',
        headline: 'Premium Vehicle Import Services',
        subtext: 'We provide quality right-hand and left-hand vehicles from Japan and America, delivering reliability and excellence to your doorstep'
    },
    {
        image: '/image/slider/manpower.jpeg',
        tag: 'Workforce Solutions',
        headline: 'Skilled Manpower Services',
        subtext: 'We provide qualified professionals and workforce solutions across industries, bridging talent gaps in global markets'
    },
    {
        image: '/image/slider/cloth.webp',
        tag: 'Textile Excellence',
        headline: 'Premium Fabrics & Garments',
        subtext: 'We supply finest quality textiles and ready-made garments from Pakistan and Bangladesh, connecting global markets with elegance'
    },
    {
        image: '/image/slider/soyabin.jpg',
        tag: 'Agricultural Trading',
        headline: 'Quality Soybeans & Grains',
        subtext: 'We provide premium agricultural commodities including soybeans and grains, supporting food security and industrial needs'
    },
    {
        image: '/image/slider/coffee.jpg',
        tag: 'Agricultural Exports',
        headline: 'Premium Coffee & Beverages',
        subtext: 'We offer finest quality coffee and agricultural products, sourced from trusted suppliers and delivered with care'
    },
    {
        image: '/image/slider/dates.jpg',
        tag: 'Quality Agro Products',
        headline: 'Premium Dates & Dry Fruits',
        subtext: 'We deliver the finest selection of dates, nuts, and dried fruits from trusted sources, ensuring freshness and quality'
    },
    {
        image: '/image/slider/nuts.avif',
        tag: 'Nutritional Excellence',
        headline: 'Premium Nuts & Seeds',
        subtext: 'We supply high-quality nuts and seeds from global sources, providing nutritious products that meet international standards'
    },
    {
        image: '/image/slider/scrap.jpg',
        tag: 'Recycling Solutions',
        headline: 'Metal Scrap & Recycling Services',
        subtext: 'We offer comprehensive scrap metal trading and recycling solutions, promoting sustainability in global supply chains'
    }
];

// Animation variants
const overlayVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const HeroSection = () => {
    return (
        <div className='hero-slider relative w-full' style={{ minHeight: 'calc(100vh - 8rem)' }}>
            <Swiper
                effect="fade"
                fadeEffect={{crossFade: true}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                speed={1200}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: false
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="w-full"
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full">
                        {/* Image Layer */}
                        <div className="absolute inset-0 overflow-hidden h-full w-full">
                            <Image
                                src={slide.image}
                                alt={slide.headline}
                                fill
                                className="object-cover object-center hero-slide-image"
                                priority={index === 0}
                                quality={90}
                            />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 hero-gradient-overlay"/>

                        {/* Content Layer */}
                        <div className="relative h-full flex items-center justify-center z-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                variants={overlayVariants}
                                className="container max-w-6xl text-center text-white space-y-4 md:space-y-6 px-4 sm:px-6 lg:px-8"
                            >
                                {/* Tag */}
                                <motion.p
                                    variants={itemVariants}
                                    className="body-sm tracking-widest uppercase text-primary-400 font-semibold"
                                >
                                    {slide.tag}
                                </motion.p>

                                {/* Headline */}
                                <motion.h1
                                    variants={itemVariants}
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                                >
                                    {slide.headline}
                                </motion.h1>

                                {/* Subtext */}
                                <motion.p
                                    variants={itemVariants}
                                    className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 max-w-2xl mx-auto"
                                >
                                    {slide.subtext}
                                </motion.p>

                                {/* CTAs */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
                                >
                                    <Button variant="premium" size="lg" asChild>
                                        <Link href="/services">
                                            Explore Services <ArrowUpRight className="w-5 h-5 ml-2"/>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild
                                            className="border-white text-white hover:bg-white hover:text-neutral-900">
                                        <Link href="/about">
                                            Learn More
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection
