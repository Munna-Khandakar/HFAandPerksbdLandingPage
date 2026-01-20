import {motion} from "framer-motion";
import {titleVariants} from '@/utils/animation';
import Image from "next/image";

const DIRECTOR = {
    name: "Major (Retd) Md Arshad Hossain, psc inf",
    rank: "Managing Director",
    image: "/image/team/arshad.jpeg",
}

export const DirectorNote = () => {
    return (
        <div className='container'>
            <div className='py-12 lg:py-16'>
                {/* Section Title */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    viewport={{once: true}}
                    className='mb-10 text-center'
                >
                    <h1 className='text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white'>
                        Director&apos;s Note
                    </h1>
                    <div className='w-16 h-0.5 bg-neutral-900 dark:bg-white mx-auto mt-2' />
                </motion.div>

                {/* Simple Side-by-Side Layout */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    viewport={{once: true}}
                    className='max-w-4xl mx-auto'
                >
                    <div className='flex flex-col md:flex-row gap-6 md:gap-8 items-start'>
                        {/* Left Side - Circular Image */}
                        <div className='flex-shrink-0'>
                            <div className='relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden'>
                                <Image
                                    src={DIRECTOR.image}
                                    alt={DIRECTOR.name}
                                    fill
                                    className='object-fit object-center'
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className='flex-1'>
                            {/* Message */}
                            <p className='text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 italic mb-4'>
                                At Perks Group, our mission is simple: to find the right products for our customers and deliver them from anywhere in the world. We take pride in working with honesty, integrity, and dedication, ensuring every client receives the best solution for their needs. Guided by our tagline, <span className='font-bold'>&quot;We walk, we sail, we fly to bring you the best,&quot;</span> we go wherever it takes to make our customers&apos; goals a reality.
                            </p>

                            {/* Director Info */}
                            <div>
                                <h3 className='text-lg md:text-xl font-bold text-neutral-900 dark:text-white'>
                                    {DIRECTOR.name}
                                </h3>
                                <p className='text-primary-600 dark:text-primary-400'>
                                    {DIRECTOR.rank}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
