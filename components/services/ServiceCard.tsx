import Image from "next/image";

type ServiceCardProps = {
    id: number | string,
    name: string,
    description: string,
    image: string,
}

export const ServiceCard = (props: ServiceCardProps) => {
    const {id, name, description, image} = props;
    return (
        <div key={id} className="relative overflow-hidden rounded-xl group">
            <div>
                <Image src={image} width={480} height={380} alt="" className="w-full max-h-[380px]"/>
            </div>
            <div
                className="text-center absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-full md:w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
                <p className="text-xs md:text-base py-4">{description}</p>
            </div>
        </div>
    );
}