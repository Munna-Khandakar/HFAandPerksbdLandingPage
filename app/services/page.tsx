'use client'

import {Suspense, useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";
import {motion} from "framer-motion";
import ChapterSelector from "@/components/ChapterSelector";
import {ServiceCard} from "@/components/services/ServiceCard";
import {ServiceData} from "@/data/ServiceData";
import {ServiceType} from "@/types/ServiceType";
import {getChapterFromParam} from "@/lib/chapter";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

function ServicesPageContent() {
    const searchParams = useSearchParams();
    const servicesGridRef = useRef<HTMLDivElement>(null);
    const chapter = getChapterFromParam(searchParams?.get("chapter") ?? undefined);
    const services: ServiceType[] = chapter ? ServiceData[chapter] ?? [] : [];

    useEffect(() => {
        if (chapter && servicesGridRef.current) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                servicesGridRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [chapter]);

    return (
        <div>
            <div className="bg-[url('/image/services.jpg')] bg-center bg-cover">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Services</h1>
            </div>

            <div className="container py-12 space-y-10">
                <div className="max-w-4xl">
                    <h2 className="text-2xl font-semibold">Browse by chapter</h2>
                    <p className="mt-2 text-muted-foreground">
                        Select a chapter to see the region-specific programs we operate.
                    </p>
                </div>

                <ChapterSelector />

                <div ref={servicesGridRef}>
                    {chapter ? (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="grid gap-8 lg:grid-cols-2"
                        >
                            {services.map((project: ServiceType) => (
                                <motion.div key={project.id} variants={itemVariants}>
                                    <ServiceCard
                                        id={project.id}
                                        name={project.name}
                                        description={project.description}
                                        image={project.image}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="rounded-lg border border-dashed border-muted-foreground/40 p-8 text-muted-foreground">
                            Choose a chapter above to explore its catalog of services.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={
            <div>
                <div className="bg-[url('/image/services.jpg')] bg-center bg-cover">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Services</h1>
                </div>
                <div className="container py-12 space-y-10">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-semibold">Browse by chapter</h2>
                        <p className="mt-2 text-muted-foreground">
                            Select a chapter to see the region-specific programs we operate.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
                        <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
                        <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
                        <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
                    </div>
                </div>
            </div>
        }>
            <ServicesPageContent />
        </Suspense>
    );
}
