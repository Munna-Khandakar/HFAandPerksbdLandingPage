'use client'

import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import {desVariants, tagVariants, titleVariants} from '@/utils/animation';

const CompanyTarget = () => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

    return (
        <div>
            <div className='text-center mb-12'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='body-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
                    At Perks Group, we are dedicated to establishing and achieving
                    ambitious goals that reflect our mission and vision. These targets
                    guide our collaborative efforts across all our businesses and
                    initiatives. Our objectives include:
                </motion.p>
            </div>
            <div className='items-center lg:flex gap-8 mb-12'>
                {/*Left Image Section */}
                <div className='w-full lg:w-1/2'>
                    <Image
                        src="/image/target.avif"
                        width={700}
                        height={700}
                        alt='Perks Group targets and objectives'
                        className='rounded-xl shadow-lg'
                    />
                </div>

                {/*Right Content Section */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='w-full lg:w-1/2'
                >
                    <div className='body-md text-neutral-700 dark:text-neutral-300 space-y-6 mt-6 lg:mt-0'>
                        <div>
                            <h3 className="h5 text-neutral-900 dark:text-neutral-50 mb-2">1. Customer-Centric Excellence:</h3>
                            <p className='ml-4'>
                                a. Customer Satisfaction: Achieve consistent customer satisfaction.<br/>
                                b. Regular Feedback: Implement quarterly surveys to gather customer feedback and identify areas for improvement.<br/>
                                c. Response Time: Reduce response times to customer inquiries under 24 hrs.
                            </p>
                        </div>

                        <div>
                            <h3 className="h5 text-neutral-900 dark:text-neutral-50 mb-2">2. Positive Impact</h3>
                            <p className='ml-4'>
                                a. Charitable Contributions: Increase our annual charitable donations by 2.5% to support social and environmental initiatives.<br/>
                                b. Community Engagement: Involve affected communities in projects aimed at enhancing education, health, and livelihoods.
                            </p>
                        </div>

                        <div>
                            <h3 className="h5 text-neutral-900 dark:text-neutral-50 mb-2">3. Global Reach</h3>
                            <p className='ml-4'>
                                a. International Expansion: Enter Middle East & African markets by 2026.<br/>
                                b. Global Partnerships: Establish 15% strategic alliances with organizations that share our values and mission.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='items-center lg:flex gap-8 mb-12'>
                {/*Left Content Section */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='w-full lg:w-1/2'
                >
                    <div className='body-md text-neutral-700 dark:text-neutral-300 space-y-6 mt-6 lg:mt-0'>
                        <div>
                            <h3 className="h4 text-neutral-900 dark:text-neutral-50 mb-3">Chapter 4: Cultivating Excellence in Agriculture</h3>
                            <p>
                                Perks Agro was our next endeavor, rooted in a passion for agriculture and a dedication to quality. We ventured into the world of agriculture to provide top-quality agricultural products, championing organic farming practices, and ensuring that our products were free from harmful chemicals. Our commitment to sustainability extended to the very source of our food.
                            </p>
                        </div>

                        <div>
                            <h3 className="h4 text-neutral-900 dark:text-neutral-50 mb-3">Chapter 5: Bridging Boundaries, Building Success</h3>
                            <p>
                                Perks Solutions marked our foray into international trade, where we facilitated the exchange of goods, ideas, and opportunities across borders. We leveraged our expertise to bridge the gap between businesses, forging global connections, and providing comprehensive import, export, and trading solutions.
                            </p>
                        </div>

                        <div>
                            <h3 className="h4 text-neutral-900 dark:text-neutral-50 mb-3">Chapter 6: Our Values, Our Vision</h3>
                            <p>
                                Throughout our journey, our core values of excellence, sustainability, and responsibility remained steadfast. Our vision, to pioneer a path to a sustainable, inclusive, and thriving future, guided us in every endeavor. We set targets, not just as objectives but as commitments to action, and tirelessly worked toward them.
                            </p>
                        </div>

                        <div>
                            <h3 className="h4 text-neutral-900 dark:text-neutral-50 mb-3">Chapter 7: Our Collective Future</h3>
                            <p>
                                As we write the next chapters of our story, we invite you to be a part of our journey. Whether you're seeking quality cars, nourishing food, charitable initiatives, top-quality agricultural products, or global trading solutions, Perks Group is here to serve you. With Perks Group, you're not just choosing products and services; you're choosing a commitment to a better future for all.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/*Right Image Section */}
                <motion.div
                    style={{scale}}
                    ref={ref}
                    className='w-full lg:w-1/2'>
                    <Image
                        src="/image/target2.jpg"
                        width={700}
                        height={700}
                        alt='Perks Group vision and future'
                        className='rounded-xl shadow-lg'
                    />
                </motion.div>
            </div>

            <div className='text-center mt-12'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='body-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
                    Our story is a testament to the power of dedication, innovation, and
                    a shared vision. Together, with our stakeholders, we aim to create a
                    future that is not just sustainable and inclusive but also filled with
                    opportunities and possibilities. Thank you for being a part of our
                    story. The best chapters are yet to come.
                </motion.p>
            </div>
        </div>
    )
}

export default CompanyTarget