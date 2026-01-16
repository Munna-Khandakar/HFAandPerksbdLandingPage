'use client'

import {Suspense, useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";
import {motion} from "framer-motion";
import {Inbox} from "lucide-react";
import ChapterSelector from "@/components/ChapterSelector";
import {ServiceCard} from "@/components/services/ServiceCard";
import {ChapterCards, ServiceData} from "@/data/ServiceData";
import {ServiceType} from "@/types/ServiceType";
import {getChapterFromParam} from "@/lib/chapter";
import {PageHero} from "@/components/layout/PageHero";
import {PageSection} from "@/components/layout/PageSection";
import {SectionHeader} from "@/components/layout/SectionHeader";
import {Skeleton} from "@/components/ui/skeleton";

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
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

function ServicesPageContent() {
    const searchParams = useSearchParams();
    const servicesGridRef = useRef<HTMLDivElement>(null);
    const chapter = getChapterFromParam(searchParams?.get("chapter") ?? ChapterCards[0].chapter);
    const chapterInParams = getChapterFromParam(searchParams?.get("chapter") ?? undefined);
    const services: ServiceType[] = chapter ? ServiceData[chapter] ?? [] : [];

    useEffect(() => {
        if (chapterInParams && chapter && servicesGridRef.current) {
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
        <>
            <PageHero
                title="Our Services"
                subtitle="Discover our comprehensive range of import/export services across multiple regions"
                backgroundImage="/image/services.jpg"
            />

            <PageSection>
                <SectionHeader
                    title="Browse by chapter"
                    subtitle="Select a chapter to see the region-specific programs we operate."
                />

                <ChapterSelector />

                <div ref={servicesGridRef} className="mt-12">
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
                        <div className="text-center py-16 bg-neutral-50 dark:bg-neutral-900 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700">
                            <Inbox className="w-16 h-16 mx-auto text-neutral-400 mb-4" />
                            <h3 className="h3 mb-2 text-neutral-900 dark:text-neutral-50">No Chapter Selected</h3>
                            <p className="body-md text-neutral-600 dark:text-neutral-400">
                                Choose a chapter above to explore its catalog of services
                            </p>
                        </div>
                    )}
                </div>
            </PageSection>
        </>
    );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={
            <>
                <PageHero
                    title="Our Services"
                    subtitle="Discover our comprehensive range of import/export services across multiple regions"
                    backgroundImage="/image/services.jpg"
                />
                <PageSection>
                    <div className="max-w-4xl mb-12">
                        <Skeleton className="h-8 w-64 mb-4" />
                        <Skeleton className="h-6 w-96" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mb-12">
                        <Skeleton className="h-32 rounded-lg" />
                        <Skeleton className="h-32 rounded-lg" />
                        <Skeleton className="h-32 rounded-lg" />
                        <Skeleton className="h-32 rounded-lg" />
                    </div>
                </PageSection>
            </>
        }>
            <ServicesPageContent />
        </Suspense>
    );
}
