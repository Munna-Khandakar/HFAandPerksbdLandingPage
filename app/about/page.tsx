'use client'

import {motion} from 'framer-motion';
import {Teams} from "@/components/Teams";
import CompanyBackground from "@/components/CompanyBackground";
import {titleVariants} from "@/utils/animation";

const page = () => {

    return (
        <div>
            <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
                <div className='container py-32 lg:py-64'>
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='text-6xl pb-8 font-semibold text-black tracking-widest text-center'>
                        Who are we?
                    </motion.h1>
                    <h2 className="text-2xl text-center font-light leading-10">
                        Welcome to Perks Group, a conglomerate of companies
                        dedicated to excellence and making a positive impact in various
                        domains. We are driven by a shared commitment to quality,
                        sustainability, and social responsibility. Our group comprises Perks
                        Auto, Perks Tex, Perks Charity, Perks Agro, Perks Sports and Perks Solutions, each
                        specializing in their unique field while embodying our core values.
                    </h2>
                </div>
            </div>
            <CompanyBackground/>
            <Teams/>
        </div>
    )
}

export default page