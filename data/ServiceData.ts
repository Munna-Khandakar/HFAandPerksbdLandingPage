import {Chapter, ChapterCard, ServiceType} from "@/types/ServiceType";

export const ALL_CHAPTERS: Chapter[] = [
    Chapter.Japan,
    Chapter.Pakistan,
    Chapter.America,
    Chapter.Bangladesh,
];

export const ChapterCards: ChapterCard[] = [
    {
        chapter: Chapter.Japan,
        title: "Japan Chapter",
        subtitle: "All Japan product including Right Hand Vehicle",
        logo: "/image/chapters/japan.gif",
    },
    {
        chapter: Chapter.Pakistan,
        title: "Pakistan Chapter",
        subtitle: "Fabrics",
        logo: "/image/chapters/pakistan.webp",
    },
    {
        chapter: Chapter.America,
        title: "USA chapter",
        subtitle: "All USA product including Left Hand Vehicle",
        logo: "/image/chapters/usa.gif",
    },
    {
        chapter: Chapter.Bangladesh,
        title: "Bangladesh Chapter",
        subtitle: "Jute, Leather, Fabrics and Medicine",
        logo: "/image/chapters/bd.gif",
    },
];

export const ServiceData: Record<Chapter, ServiceType[]> = {
    [Chapter.Japan]: [
        {
            id: 1,
            name: 'Identifying trustworthy',
            description: 'Identifying trustworthy Japanese manufacturers and suppliers for sourcing quality products, ranging from small components to large machinery',
            image: '/image/identify.webp',
        },
        {
            id: 2,
            name: 'Quality Control and Inspection',
            description: 'Conducting thorough quality checks on products before shipment to ensure they meet standards.',
            image: '/image/quality.jpg',
        },
        {
            id: 3,
            name: 'Logistics and Shipping Coordination',
            description: 'Managing transportation, customs clearance, and delivery of goods from Japan to Bangladesh.',
            image: '/image/logistics.jpeg',
        },
        {
            id: 4,
            name: 'Market Research and Analysis',
            description: 'Providing insights into market trends, consumer preferences, and competitive analysis in both countries.',
            image: '/image/market-research.avif',
        },
        {
            id: 5,
            name: 'Technical Support and Consultation',
            description: 'Offering expertise in specific industries, such as electronics or machinery, to help businesses utilize imported products effectively.',
            image: '/image/support.jpg',
        },
        {
            id: 6,
            name: 'After-Sales Service and Support',
            description: 'Facilitating warranty claims, repairs, and maintenance for imported goods to enhance customer satisfaction',
            image: '/image/after.jpeg',
        },
        {
            id: 7,
            name: 'Cultural and Business Etiquette Training',
            description: 'Assisting Bangladeshi businesses in understanding Japanese business practices and culture for smoother negotiations and partnerships.',
            image: '/image/training.webp',
        },
        {
            id: 8,
            name: 'Door to Door parts Service through EMS',
            description: 'Providing door-to-door delivery of small parts and components according to Cat parts number from Japan to Bangladesh through EMS services upto 35Kg at your doorsteps.',
            image: '/image/ems.jpg',
        },
        {
            id: 9,
            name: 'Heavy Equipment Import',
            description: 'Importing heavy machinery and equipment from Japan to Bangladesh, including sourcing, inspection, and logistics coordination.',
            image: '/image/heavy.webp',
        },
        {
            id: 10,
            name: 'Car Parts Import',
            description: 'Sourcing and importing genuine Car parts and components from Japan to Bangladesh for heavy machinery and equipment.',
            image: '/image/car-parts.jpg',
        },
        {
            id: 11,
            name: 'Medical Device Import',
            description: 'Sourcing and importing medical devices and equipment from Japan to Bangladesh, including quality control and logistics coordination.',
            image: '/image/medical.png',
        },
        {
            id: 12,
            name: 'Sports Items Import',
            description: 'We are importing high quality golf & sports accessories',
            image: '/image/golf.jpeg',
        },
        {
            id: 13,
            name: 'Cosmetics & Daily Needs Export',
            description: 'Exporting high-quality cosmetics and daily necessities from Japan, including beauty products, personal care items, and household essentials.',
            image: '/image/cosmetics.webp',
        }
    ],
    [Chapter.Pakistan]: [
        {
            id: 1,
            name: "Best Fabrics Clothes",
            description: "Elegant suits or fabrics from Pakistan.",
            image: "/image/cloth.webp",
        },
        {
            id: 2,
            name: "Traditional Desi Dresses",
            description: "Exporting traditional Pakistani desi female dresses, including elegant shalwar kameez, lehengas, and embroidered garments crafted with premium fabrics.",
            image: "/image/slider/cloth.jpeg",
        }
    ],
    [Chapter.America]: [
        {
            id: 1,
            name: 'Agricultural Products Export',
            description: 'Exporting premium agricultural commodities from the USA including wheat, soybeans, corn, and various pulses to Bangladesh.',
            image: '/image/usa-chapter/aagriculture.avif',
        },
        {
            id: 2,
            name: 'Raw Cotton & Cotton Waste',
            description: 'Supplying high-quality raw cotton and cotton waste from USA for textile manufacturing in Bangladesh.',
            image: '/image/usa-chapter/cotton.avif',
        },
        {
            id: 3,
            name: 'Scrap Metal Export',
            description: 'Exporting scrap metal including HMS 1&2 and aluminum scrap from USA for recycling and manufacturing industries.',
            image: '/image/usa-chapter/scrap.avif',
        },
        {
            id: 4,
            name: 'Iron & Steel Products',
            description: 'Providing quality iron and steel products from USA for construction and manufacturing sectors in Bangladesh.',
            image: '/image/usa-chapter/iron.avif',
        },
        {
            id: 5,
            name: 'Industrial Machinery & Generators',
            description: 'Sourcing and exporting industrial machinery and generators from USA to support Bangladesh manufacturing infrastructure.',
            image: '/image/usa-chapter/industrial.avif',
        },
        {
            id: 6,
            name: 'Electrical Equipment & Electronics',
            description: 'Supplying electrical equipment and electronic components from USA for industrial and commercial applications.',
            image: '/image/usa-chapter/electric.avif',
        },
        {
            id: 7,
            name: 'Industrial Chemicals & Dyes',
            description: 'Exporting industrial chemicals and dyes from USA for textile, manufacturing, and processing industries.',
            image: '/image/usa-chapter/industry-chemical-dye.avif',
        },
        {
            id: 8,
            name: 'Medical Equipment & Lab Instruments',
            description: 'Providing advanced medical equipment and laboratory instruments from USA to healthcare facilities in Bangladesh.',
            image: '/image/usa-chapter/medical-equipment.avif',
        },
        {
            id: 9,
            name: 'Paper & Packaging Materials',
            description: 'Supplying paper products and packaging materials from USA for various industrial and commercial needs.',
            image: '/image/usa-chapter/packaging.avif',
        },
        {
            id: 10,
            name: 'Automotive Parts & Spare Parts',
            description: 'Exporting genuine automotive parts and spare parts from USA for vehicles and machinery maintenance.',
            image: '/image/usa-chapter/automobile.avif',
        },
        {
            id: 11,
            name: 'Plastic Raw Materials',
            description: 'Providing plastic raw materials including PET, HDPE, and LDPE from USA for manufacturing industries.',
            image: '/image/usa-chapter/plastic.avif',
        },
        {
            id: 12,
            name: 'Construction Tools & Materials',
            description: 'Supplying construction tools and building materials from USA for infrastructure development projects.',
            image: '/image/usa-chapter/construction.avif',
        },
        {
            id: 13,
            name: 'IT Hardware',
            description: 'Exporting computer hardware, networking equipment, and IT infrastructure components from USA.',
            image: '/image/usa-chapter/it-hardware.avif',
        },
        {
            id: 14,
            name: 'Aircraft Parts',
            description: 'Supplying limited and regulated aircraft parts from USA for aviation maintenance and repair operations.',
            image: '/image/usa-chapter/air-craft.avif',
        },
        {
            id: 15,
            name: 'Commodities & Materials Export',
            description: 'Sourcing and exporting premium commodities from the USA, including various nuts (almonds, walnuts), premium dates, metal scrap for recycling, specialty coffee beans, and refined soya oil.',
            image: '/image/slider/nuts.avif',
        }
    ],
    [Chapter.Bangladesh]: [
        {
            id: 1,
            name: "Jute Products",
            description: "Supplying best quality jute products from Bangladesh",
            image: "/image/jute.jpg",
        },
        {
            id: 2,
            name: "Leather Products",
            description: "Get the best quality leather products from Bangladesh",
            image: "/image/leather.jpg",
        },
        {
            id: 3,
            name: "Best Fabrics Clothes",
            description: "Elegant suits or fabrics from Bangladesh.",
            image: "/image/cloth.webp",
        },
        {
            id: 4,
            name: "Medicine",
            description: "Get the best medicines from Bangladesh.",
            image: "/image/medicine.jpg",
        },
        {
            id: 5,
            name: "Skilled Manpower Export",
            description: "Providing skilled and semi-skilled manpower services from Bangladesh to international markets, including technical workers, laborers, and specialized professionals.",
            image: "/image/slider/manpower.jpeg",
        }
    ],
};
