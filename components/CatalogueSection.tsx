'use client'

import Image from "next/image";
import {TbArrowNarrowRight} from "react-icons/tb";
import {motion} from "framer-motion";
import {ServiceData} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";

type CatalogueSectionProps = {
    chapter: Chapter;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function CatalogueSection({chapter}: CatalogueSectionProps) {
    const services = ServiceData[chapter] ?? [];

    if (!services.length) {
        return null;
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-4 grid-cols-1 lg:gap-0 divide-gray-300 lg:divide-x"
        >
            {services.map((item) => (
                <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative overflow-hidden group h-[400px]"
                >
                    <div className="w-full h-full">
                        <Image
                            src={item.image}
                            width={380}
                            height={400}
                            alt={item.name}
                            className="w-full h-full object-cover border"
                        />
                    </div>

                    <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
                        <div className="flex justify-between pb-4">
                            <p className="text-sm">{item.name}</p>
                            <span className="text-sm uppercase">{item.id}</span>
                        </div>
                        <span className="block text-xl font-semibold">{item.name}</span>
                        <p className="pt-4 line-clamp-4">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="/services">
                            See Details <TbArrowNarrowRight className="ml-2"/>
                        </a>
                    </div>

                    <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-4 transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
                        <p className="tracking-wider -rotate-90 text-sm text-start">{item.name}</p>
                        <span className="pt-4 uppercase">{item.id}</span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
