import {motion} from "framer-motion";
import {titleVariants} from '@/utils/animation';
import Image from "next/image";
import {Quote} from "lucide-react";

const DIRECTOR = {
    name: "Major Md Arshad Hossain",
    credentials: "psc, Infantry (Retired)",
    rank: "Managing Director",
    image: "/image/team/arshad.jpeg",
    message: `At Perks Group, our mission is simple: to find the right products for our customers and deliver them from anywhere in the world. We take pride in working with honesty, integrity, and dedication, ensuring every client receives the best solution for their needs. Guided by our tagline, "We walk, we sail, we fly to bring you the best," we go wherever it takes to make our customers' goals a reality.`
}

export const DirectorNote = () => {
    return (
        <div className='container'>
            <div className='py-12 lg:py-20'>
                {/* Section Title */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    viewport={{once: true}}
                    className='mb-12 text-center'
                >
                    <h1 className='text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent'>
                        Director&apos;s Note
                    </h1>
                    <div className='w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mt-4 rounded-full' />
                </motion.div>

                {/* Modern Card with Side-by-Side Layout */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    viewport={{once: true}}
                    className='max-w-6xl mx-auto'
                >
                    <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                        {/* Decorative Background Pattern */}
                        <div className='absolute inset-0 opacity-5'>
                            <div className='absolute top-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl' />
                            <div className='absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl' />
                        </div>

                        <div className='relative grid lg:grid-cols-5 gap-0'>
                            {/* Left Side - Image */}
                            <div className='lg:col-span-2 relative h-64 lg:h-auto'>
                                <div className='absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 z-10' />
                                <Image
                                    src={DIRECTOR.image}
                                    alt={DIRECTOR.name}
                                    fill
                                    className='object-fit object-center'
                                    priority
                                />
                                {/* Decorative Border */}
                                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 z-20' />
                            </div>

                            {/* Right Side - Content */}
                            <div className='lg:col-span-3 p-8 md:p-12 flex flex-col justify-center'>
                                {/* Quote Icon */}
                                <div className='mb-6'>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg'>
                                        <Quote className='w-6 h-6 text-white' />
                                    </div>
                                </div>

                                {/* Message */}
                                <blockquote className='mb-8'>
                                    <p className='text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 font-light italic'>
                                        {DIRECTOR.message}
                                    </p>
                                </blockquote>

                                {/* Director Info */}
                                <div className='border-l-4 border-primary-500 pl-6'>
                                    <h3 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1'>
                                        {DIRECTOR.name}
                                    </h3>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-2'>
                                        {DIRECTOR.credentials}
                                    </p>
                                    <p className='text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide'>
                                        {DIRECTOR.rank}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
