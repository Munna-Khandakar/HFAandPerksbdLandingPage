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
        <div className='container'>
            <div className='pt-4'>
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>
                    OUR TARGETS
                </motion.h2>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text-2xl text-center font-medium pb-10 mt-5'>
                    At HFA Perks BD, we are dedicated to establishing and achieving
                    ambitious goals that reflect our mission and vision. These targets
                    guide our collaborative efforts across all our businesses and
                    initiatives. Our objectives include:
                </motion.p>
            </div>
            <div className='items-center lg:flex gap-x-8'>
                {/*Left Image Section */}
                <motion.div
                    style={{scale}}
                    ref={ref}
                    className='w-full'>
                    <Image src="/image/gallery1123.jpg" width={700} height={700} alt={''}/>
                </motion.div>

                {/*Right Content Section */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <p className='pb-8 tracking-wide mt-6'>
                        <span className="font-bold">1. Customer-Centric Execellence:</span><br/>
                        a. Customer Satisfaction: Achieve consistent customer
                        satisfaction.<br/>
                        b. Regular Feedback: Implement quarterly surveys to gather
                        customer feedback and identify areas for improvement.<br/>
                        c. Response Time: Reduce response times to customer inquiries
                        under 24 hrs.<br/><br/>
                        <span className="font-bold">2. Positive Impact</span><br/>
                        a. Charitable Contributions: Increase our annual charitable
                        donations by 2.5% to support social and environmental
                        initiatives.<br/>
                        b. Community Engagement: Involve affected communities in
                        projects aimed at enhancing education, health, and livelihoods.<br/><br/>
                        <span className="font-bold">4. Global reach</span><br/>
                        a. International Expansion: : Enter Middle East & African markets
                        by 2026.<br/>
                        b. Global Partnerships: Establish 15% strategic alliances with
                        organizations that share our values and mission.<br/><br/>
                    </p>
                </motion.div>
            </div>
            <div className='items-center lg:flex gap-x-8'>
                {/*Left Image Section */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <p className='pb-8 tracking-wide mt-6'>
                        <span className="font-bold">Chapter 4: Cultivating Excellence in Agriculture</span><br/>
                        Perks Agro was our next endeavor, rooted in a passion for
                        agriculture and a dedication to quality. We ventured into the world
                        of agriculture to provide top-quality agricultural products,
                        championing organic farming practices, and ensuring that our
                        products were free from harmful chemicals. Our commitment to
                        sustainability extended to the very source of our food.<br/><br/>
                        <span className="font-bold">Chapter 5: Bridging Boundaries, Building Success</span><br/>
                        Perks Solutions marked our foray into international trade, where we
                        facilitated the exchange of goods, ideas, and opportunities across
                        borders. We leveraged our expertise to bridge the gap between
                        businesses, forging global connections, and providing
                        comprehensive import, export, and trading solutions.<br/><br/>
                        <span className="font-bold">Chapter 6: Our Values, Our Vision</span><br/>
                        Throughout our journey, our core values of excellence,
                        sustainability, and responsibility remained steadfast. Our vision, to
                        pioneer a path to a sustainable, inclusive, and thriving future,
                        guided us in every endeavor. We set targets, not just as objectives
                        but as commitments to action, and tirelessly worked toward them.<br/><br/>
                        <span className="font-bold">Chapter 7: Our Collective Future</span><br/>
                        As we write the next chapters of our story, we invite you to be a part
                        of our journey. Whether you’re seeking quality cars, nourishing food,
                        charitable initiatives, top-quality agricultural products, or global
                        trading solutions, Perks Group is here to serve you. With Perks Group,
                        you’re not just choosing products and services; you’re choosing a
                        commitment to a better future for all.
                    </p>
                </motion.div>
                {/*Right Content Section */}
                <motion.div
                    style={{scale}}
                    ref={ref}
                    className='w-full'>
                    <Image src="/image/gallery1123.jpg" width={700} height={700} alt={''}/>
                </motion.div>
            </div>
            <div className='pt-4'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text-2xl text-center font-medium pb-10 mt-5'>
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