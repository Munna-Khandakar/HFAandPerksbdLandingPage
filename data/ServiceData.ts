import {Chapter, ChapterCard, ServiceType} from "@/types/ServiceType";

export const ALL_CHAPTERS: Chapter[] = [
    Chapter.Japan,
    Chapter.Africa,
    Chapter.America,
    Chapter.Bangladesh,
];

export const ChapterCards: ChapterCard[] = [
    {
        chapter: Chapter.Japan,
        title: "Japan Chapter",
        subtitle: "Sourcing & Quality Assurance",
        logo: "/image/chapter-japan.svg",
    },
    {
        chapter: Chapter.Africa,
        title: "Africa Chapter",
        subtitle: "Infrastructure & Field Support",
        logo: "/image/chapter-africa.svg",
    },
    {
        chapter: Chapter.America,
        title: "America Chapter",
        subtitle: "Partnerships & Logistics",
        logo: "/image/chapter-america.svg",
    },
    {
        chapter: Chapter.Bangladesh,
        title: "Bangladesh Chapter",
        subtitle: "Local Distribution & Care",
        logo: "/image/chapter-bangladesh.svg",
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
        }
    ],
    [Chapter.Africa]: [
        {
            id: "africa-01",
            name: "Market Research and Analysis",
            description: "Delivering on-the-ground insights into African market demand, pricing dynamics, and competitive landscapes.",
            image: "/image/market-research.avif",
        },
        {
            id: "africa-02",
            name: "Technical Support and Consultation",
            description: "Deploying regional engineers to commission equipment and train operators across key African hubs.",
            image: "/image/support.jpg",
        },
        {
            id: "africa-03",
            name: "After-Sales Service and Support",
            description: "Maintaining responsive field teams for warranty management, repairs, and uptime assurance.",
            image: "/image/after.jpeg",
        },
    ],
    [Chapter.America]: [
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
        }
    ],
    [Chapter.Bangladesh]: [
        {
            id: "bangladesh-01",
            name: "Automotive Component Import",
            description: "Supplying certified automotive and heavy machinery parts tailored to Bangladeshi fleet needs.",
            image: "/image/car-parts.jpg",
        },
        {
            id: "bangladesh-02",
            name: "Healthcare Technology Sourcing",
            description: "Importing medical devices with end-to-end compliance support for local healthcare providers.",
            image: "/image/medical.png",
        },
        {
            id: "bangladesh-03",
            name: "Sports and Lifestyle Distribution",
            description: "Delivering premium sports equipment and lifestyle brands to retail partners nationwide.",
            image: "/image/golf.jpeg",
        },
    ],
};
