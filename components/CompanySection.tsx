'use client'

import {tagVariants, titleVariants} from "@/utils/animation";
import {motion} from "framer-motion";

const InternationalPartners = () => {
    const partners = [
        {
            name: "Stravise LLC",
            address1: "1251 Red Bud Ln",
            address2: "Round Rok, Tx - 78664",
            phone: "+1 718 496 8266",
        },
        {
            name: "My Plate xyz INC",
            address1: "1401 Satellite View",
            address2: "Round Rok, Tx - 78665",
            phone: "Phone : +1 929 471 8424",
        },
        {
            name: "Africa Bangladesh Business Forum",
            address1: "Cite Douane, Route du Niger",
            address2: "Coleah, Matam, Conakry, Guinea",
            phone: "Phone : +224 627 86 89 98",
        }
    ];

    return (
        <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white sm:text-5xl mb-16">
                    International Partners
                </h2>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={index % 2 === 0 ? titleVariants : tagVariants}
                            className="mx-auto flex max-w-xs flex-col gap-y-4"
                        >
                            <dt className="text-white leading-7 text-2xl font-semibold">
                                {partner.name}
                            </dt>
                            <dd className="text-white text-lg leading-relaxed">
                                <p> {partner.address1}</p>
                                <p>{partner.address2}</p>
                                <p>{partner.phone}</p>
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default InternationalPartners;
