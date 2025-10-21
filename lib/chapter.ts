import {ALL_CHAPTERS} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";

const CHAPTER_LOOKUP = new Set<Chapter>(ALL_CHAPTERS);

export const getChapterFromParam = (value: string | string[] | null | undefined): Chapter | undefined => {
    if (!value) {
        return undefined;
    }

    const chapter = Array.isArray(value) ? value[0] : value;

    if (!chapter) {
        return undefined;
    }

    return CHAPTER_LOOKUP.has(chapter as Chapter) ? chapter as Chapter : undefined;
};
