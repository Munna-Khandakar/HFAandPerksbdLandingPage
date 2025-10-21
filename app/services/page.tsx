import ChapterSelector from "@/components/ChapterSelector";
import {ServiceCard} from "@/components/services/ServiceCard";
import {ServiceData} from "@/data/ServiceData";
import {ServiceType} from "@/types/ServiceType";
import {getChapterFromParam} from "@/lib/chapter";

type ServicesPageProps = {
    searchParams?: Record<string, string | string[] | undefined>;
};

export default function ServicesPage({searchParams}: ServicesPageProps) {
    const chapter = getChapterFromParam(searchParams?.chapter ?? undefined);
    const services: ServiceType[] = chapter ? ServiceData[chapter] ?? [] : [];

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

                {chapter ? (
                    <div className="grid gap-8 lg:grid-cols-2">
                        {services.map((project: ServiceType) => (
                            <ServiceCard
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-lg border border-dashed border-muted-foreground/40 p-8 text-muted-foreground">
                        Choose a chapter above to explore its catalog of services.
                    </div>
                )}
            </div>
        </div>
    )
}
