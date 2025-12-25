'use client'

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { PageSection } from "@/components/layout/PageSection";

const galleryImages = [
  // Column 1
  [
    { src: "/image/1.jpg", alt: "Perks Group international operations" },
    { src: "/image/2.jpg", alt: "Global trading excellence" },
    { src: "/image/3.jpg", alt: "Import export services" },
  ],
  // Column 2
  [
    { src: "/image/4.jpg", alt: "International partnerships" },
    { src: "/image/japan-day.jpeg", alt: "Perks Group Japan operations" },
    { src: "/image/6.jpg", alt: "Quality products showcase" },
  ],
  // Column 3
  [
    { src: "/image/7.jpg", alt: "Professional trading services" },
    { src: "/image/8.jpg", alt: "Global logistics network" },
    { src: "/image/10.jpg", alt: "International trade excellence" },
  ],
  // Column 4
  [
    { src: "/image/11.jpg", alt: "Perks Group facilities" },
    { src: "/image/japan-night.jpeg", alt: "Japan business operations" },
    { src: "/image/12.jpg", alt: "Premium trading company" },
  ],
];

const page = () => {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our global operations and success stories"
      />

      <PageSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-xl group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="h-auto max-w-full rounded-xl hover:scale-105 transition-transform duration-300 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
};

export default page;
