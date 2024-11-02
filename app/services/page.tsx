import {ServiceCard} from "@/components/services/ServiceCard";
import {ServiceData} from "@/data/ServiceData";

export default function Projects() {


    return (
        <div>
            <div className="bg-[url('/image/services.jpg')] bg-center bg-cover">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Services</h1>
            </div>

            <div className="container grid lg:grid-cols-2 gap-8 py-8">
                {
                    ServiceData.map((project) => (
                        <ServiceCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}