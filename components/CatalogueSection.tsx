'use client'

import Image from "next/image";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";
import {ServiceData} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";
import Link from "next/link";

type CatalogueSectionProps = {
    chapter: Chapter;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
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
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 grid-cols-1"
        >
            {services.map((item) => (
                <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative overflow-hidden group h-[400px] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="w-full h-full">
                        <Image
                            src={item.image}
                            width={380}
                            height={400}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute top-0 p-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md m-6 rounded-lg shadow-lg">
                        <div className="flex justify-between pb-3 items-center">
                            <p className="body-sm font-semibold text-neutral-900 dark:text-neutral-50">{item.name}</p>
                            <span className="body-xs uppercase text-primary-600 dark:text-primary-400 font-semibold">{item.id}</span>
                        </div>
                        <span className="block h4 text-neutral-900 dark:text-neutral-50">{item.name}</span>
                        <p className="pt-3 body-sm line-clamp-4 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                        <Link
                            className="inline-flex items-center font-medium mt-3 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            href="/services"
                        >
                            See Details <ArrowRight className="ml-2 w-4 h-4"/>
                        </Link>
                    </div>

                    <div className="inset-0 bg-neutral-50 dark:bg-neutral-800 flex-col items-center justify-end md:flex md:absolute gap-32 pb-4 transition duration-300 ease-in-out border-b-2 border-primary-600 group-hover:translate-y-full md:border-b-0 hidden">
                        <p className="tracking-wider -rotate-90 body-sm text-start text-neutral-900 dark:text-neutral-50">{item.name}</p>
                        <span className="pt-4 uppercase body-xs text-primary-600 dark:text-primary-400 font-semibold">{item.id}</span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
