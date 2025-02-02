import Image from "next/image";
import {TbArrowNarrowRight} from "react-icons/tb";
import {ServiceData} from "@/data/ServiceData";

export default function CatalogueSection() {

    return (
        <div className="grid gap-8 md:grid-cols-4 grid-cols-1 lg:gap-0 divide-gray-300 lg:divide-x">
            {
                ServiceData.map((item) => (
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
                                <p className="text-sm">{item.name}</p>
                                <span className="text-sm">{item.id}</span>
                            </div>
                            <a className="block text-xl font-semibold" href="">{item.name}</a>
                            <p className="pt-4 line-clamp-4">{item.description}</p>
                            <a className="inline-flex items-center font-medium" href="/services">See Details <TbArrowNarrowRight className="ml-2" /> </a>
                        </div>

                        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-4 transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
                                <p className="tracking-wider -rotate-90 text-sm text-start">{item.name}</p>
                                <span className="pt-4">{item.id}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}