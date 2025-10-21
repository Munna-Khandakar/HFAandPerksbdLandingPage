'use client'

import type {KeyboardEvent} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChapterCards} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";
import {cn} from "@/lib/utils";

const AboutComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const activeChapter = (searchParams?.get("chapter") as Chapter | null) ?? null;

    const handleCardClick = (chapter: Chapter) => {
        const params = new URLSearchParams(searchParams?.toString());

        if (activeChapter === chapter) {
            params.delete("chapter");
        } else {
            params.set("chapter", chapter);
        }

        const query = params.toString();
        const nextPath = query ? `${pathname}?${query}` : pathname;

        router.push(nextPath, {scroll: false});
    };

    const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, chapter: Chapter) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleCardClick(chapter);
        }
    };

    return (
        <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                >
                    <Image
                        src="/image/cars.gif"
                        width={900}
                        height={500}
                        alt="About"
                        className="max-md:hidden clipped-corners"
                    />
                </motion.div>

                <div className="items-center">
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        Services we offer
                    </motion.h2>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="px-12 tracking-wider uppercase text-gray-400 mt-3">
                        HFA and Perks Bd Co. Ltd
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4 mt-4">
                        We have four chapters, and each one curates services tailored to its region. Click a chapter to explore the programs we deliver together.
                    </motion.p>

                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="px-12 pb-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            {ChapterCards.map((card) => {
                                const isActive = activeChapter === card.chapter;

                                return (
                                    <Card
                                        key={card.chapter}
                                        role="button"
                                        tabIndex={0}
                                        aria-pressed={isActive}
                                        onClick={() => handleCardClick(card.chapter)}
                                        onKeyDown={(event) => handleCardKeyDown(event, card.chapter)}
                                        className={cn(
                                            "transition border-2",
                                            isActive
                                                ? "border-primary/80 bg-primary/5 shadow-sm"
                                                : "border-border hover:border-primary/50 hover:shadow-sm"
                                        )}
                                    >
                                        <CardHeader className="flex flex-row items-center gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-white">
                                                <Image
                                                    src={card.logo}
                                                    alt={`${card.title} logo`}
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{card.title}</CardTitle>
                                                <CardDescription>{card.subtitle}</CardDescription>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
