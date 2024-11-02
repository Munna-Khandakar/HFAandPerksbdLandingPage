'use client'

import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import {desVariants, tagVariants, titleVariants} from '@/utils/animation';

const CompanyBackground = () => {
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
                    COMPANY BACKGROUND
                </motion.h2>

                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text-2xl text-center font-medium pb-10 mt-5'>
                    In the heart of our journey lies a commitment to excellence,
                    sustainability, and making a positive impact. This is the story of
                    Perks Group—a conglomerate of companies dedicated to
                    bringing about meaningful change and pioneering innovation
                    across various industries.
                </motion.p>
            </div>
            <div className='items-center lg:flex gap-x-8'>
                {/*Left Image Section */}
                <motion.div
                    style={{scale}}
                    ref={ref}
                    className='w-full'>
                    <Image src="/image/gallery1123.jpg" width={700} height={700}/>
                </motion.div>

                {/*Right Content Section */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <p className='pb-8 tracking-wide mt-6'>
                        <span className="font-bold">Chapter 1: The Seeds of Excellence</span><br/> Our story began with
                        a vision—a vision to excel, to offer products
                        and services that not only met the highest standards but set new
                        ones. Perks Group’s journey was seeded in the pursuit of excellence.
                        It was in this pursuit that Perks Auto was born, catering to the
                        discerning needs of individuals seeking the finest imported cars.
                        With meticulous attention to detail, a passion for quality, and an
                        unwavering commitment to customer satisfaction, Perks Auto
                        quickly became synonymous with excellence in the world of
                        automobiles.<br/><br/>
                        <span className="font-bold">Chapter 2: Nourishing Well-being and Sustainability</span><br/>
                        As our journey
                        progressed, so did our commitment to sustainability
                        and well-being. Perks Food emerged from a deep-seated belief
                        that what we consume should not only nourish our bodies but also
                        the planet. We embarked on a mission to provide organic, fresh,
                        and hygienic foods, championing sustainable farming practices
                        and offering products that supported a healthier lifestyle.
                        <br/><br/>
                        <span className="font-bold">Chapter 3: Giving Back to the Community</span><br/>
                        The desire to make a positive impact on society led us to create
                        Perks Charity. It was here that we actively engaged in projects and
                        initiatives aimed at addressing societal challenges. Education,
                        healthcare, environmental conservation, and social empowerment
                        became the pillars of our charitable endeavors. We saw the impact
                        of our actions in the smiles of those we helped, and this further
                        fueled our determination to give back.<br/><br/>

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
                    <Image src="/image/gallery1123.jpg" width={700} height={700}/>
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

export default CompanyBackground