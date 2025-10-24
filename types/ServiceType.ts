export enum Chapter {
    Japan = "japan",
    Pakistan = "pakistan",
    America = "america",
    Bangladesh = "bd",
}

export type ServiceType = {
    id: string | number;
    name: string;
    description: string;
    image: string;
};

export type ChapterCard = {
    chapter: Chapter;
    title: string;
    subtitle: string;
    logo: string;
};
