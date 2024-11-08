import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            //Perks Auto
            catagory: "PERKS AUTO",
            title: "Perks Auto",
            image: "/image/11.jpg",
            description: "Driving Your Dreams",
        },
        {
            id: "02",
            //Perks Tex
            catagory: "PERKS TEX",
            title: "Perks Tex",
            image: "/image/13.jpg",
            description: "Passionate About Fashion",
        },
        {
            id: "03",
            //Perks Solutions
            catagory: "PERKS SOLUTIONS",
            title: "Perks Solutions",
            image: "/image/4.jpg",
            description: "Bridging Boundaries, Building Success",
        },
        {
            id: "04",
            // Perks Agro
            catagory: "PERKS AGRO",
            title: "Perks Agro",
            image: "/image/12.jpg",
            description: "Cultivating Excellence",
        },
        {
            id: "05",
            // Perks Charity
            catagory: "PERKS CHARITY",
            title: "Perks Charity",
            image: "/image/8.jpg",
            description: "Changing Lives Together",
        }
    ]

    return (
        <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
            {
                items.map((item) => (
                    <div key={item.id}
                    className="relative overflow-hidden group"
                    >
                        <div>
                            <Image 
                            src={item.image}
                            width={380}
                            height={100}
                            alt=""
                            className="w-full border h-[400px]"
                            />
                        </div>

                        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
                            <div className="flex justify-between pb-4">
                                <p className="text-sm">{item.catagory}</p>
                                <span className="text-sm">{item.id}</span>
                            </div>
                            <a className="block text-xl font-semibold" href="">{item.title}</a>
                            <p className="py-4">{item.description}</p>
                            <a className="inline-flex items-center font-medium" href="/services">See Details <TbArrowNarrowRight className="ml-2" /> </a>
                        </div>

                        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
                            <p className="tracking-wider -rotate-90">{item.catagory}</p>
                            <span>{item.id}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}