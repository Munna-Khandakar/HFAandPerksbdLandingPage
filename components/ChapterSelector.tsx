'use client'

import type {KeyboardEvent} from "react";
import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChapterCards} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";
import {cn} from "@/lib/utils";

type ChapterSelectorProps = {
    className?: string;
};

const ChapterSelector = ({className}: ChapterSelectorProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const activeChapter = (searchParams?.get("chapter") as Chapter | null) ?? null;

    const pushRoute = (nextChapter: Chapter | null) => {
        const params = new URLSearchParams(searchParams?.toString());

        if (nextChapter) {
            params.set("chapter", nextChapter);
        } else {
            params.delete("chapter");
        }

        const query = params.toString();
        const nextPath = query ? `${pathname}?${query}` : pathname;

        router.push(nextPath, {scroll: false});
    };

    const handleCardClick = (chapter: Chapter) => {
        pushRoute(activeChapter === chapter ? null : chapter);
    };

    const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, chapter: Chapter) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleCardClick(chapter);
        }
    };

    return (
        <div className={cn("grid gap-4 md:grid-cols-2", className)}>
            {
                ChapterCards.map((card) => {
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
                                "transition border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                                isActive
                                    ? "border-primary/80 bg-primary/5 shadow-sm"
                                    : "border-border hover:border-primary/50 hover:shadow-sm"
                            )}
                        >
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                    <Image
                                        src={card.logo}
                                        alt={`${card.title} logo`}
                                        width={80}
                                        height={80}
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <CardTitle className="text-xl">{card.title}</CardTitle>
                                    <CardDescription>{card.subtitle}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })
            }
        </div>
    );
};

export default ChapterSelector;
