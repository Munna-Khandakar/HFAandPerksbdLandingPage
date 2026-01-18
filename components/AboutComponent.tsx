'use client'

import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";
import ChapterSelector from "@/components/ChapterSelector";

const SLIDER_IMAGES = [
    '/image/slider/cars.avif',
    '/image/slider/manpower.jpeg',
    '/image/slider/cloth.webp',
    '/image/slider/soyabin.jpg',
    '/image/slider/coffee.jpg',
    '/image/slider/dates.jpg',
    '/image/slider/nuts.avif',
    '/image/slider/scrap.jpg',
];

const slideVariants = {
    enter: {
        opacity: 0
    },
    center: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};

const AboutComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? SLIDER_IMAGES.length - 1 : prev - 1
        );
    };

    // Auto-play logic
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [currentSlide]);

    return (
        <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="relative w-full max-md:hidden"
                >
                    {/* Custom Slider Container */}
                    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    opacity: { duration: 0.5 }
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={SLIDER_IMAGES[currentSlide]}
                                    alt={`Perks Group Slide ${currentSlide + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={currentSlide === 0}
                                    quality={90}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 p-3 rounded-full shadow-lg transition"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 p-3 rounded-full shadow-lg transition"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                            {SLIDER_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? 'bg-white w-8'
                                            : 'bg-white/50 hover:bg-white/70'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
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
