import {motion} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from '@/utils/animation';
import Image from "next/image";
import {TeamCard} from "@/components/TeamCard";

const TEAM = [
    {
        id: 1,
        name: "Major Md Arshad Hossain. psc, Infantry (Retired)",
        rank: "Managing Director - HFA Perks BD",
        image: "/image/team/arshad.jpeg",
        details: "Ex Cadet of Rajshahi Cadet College (29 th Batch | 92-98)"
    },
    {
        id: 2,
        name: "Hossain Mohammad Tofajjal",
        rank: "CEO - HFA Perks BD",
        image: "/image/team/tofajjal.jpeg",
    },
    {
        id: 3,
        name: "Major Md Rasheduzzaman Khan, psc, Artillery (Retired)",
        rank: "Director - HFA Perks BD",
        image: "/image/team/rashed.jpg",
        details: "B.Sc Engg (CSE), MIST Ex Cadet of Barishal Cadet College (18th Batch | 95-01)"
    },
    {
        id: 4,
        name: "Lieutenant Colonel Belal Hossain Patwary, psc, Engineers (Retired)",
        rank: "Director - HFA Perks BD",
        image: "/image/team/belal.jpeg",
        details: "B.Sc Engg (Civil), MIST Ex Cadet of Sylhet Cadet College (13th Batch | 89-95)"
    },
    {
        id: 5,
        name: "Syed Moazzem Hossain",
        rank: "Advisor, Accounts & Finance- HFA Perks BD",
        image: "/image/team/moazzem.jpeg",
        details: "B.Sc in Fashion Design and Technology, BGMEA Institute of Fashion & Technology (BIFT) "
    },
    {
        id: 6,
        name: "Major Md Nahid islam Satil, psc, Infantry (Retired)",
        rank: "Director & Country Manager USA - HFA Perks BD",
        image: "/image/team/satil.jpeg",
        details: "Ex Cadet of Rajshahi Cadet College (32 nd Batch | 95-01)"
    }
]

export const Teams = () => {
    return (
        <div className='container'>
            <div className='lg:py-20'>
                <div className='pt-8 pb-4'>
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='text-4xl font-bold tracking-wider text-center uppercase'>Our Team
                    </motion.h1>
                </div>

                <div className='grid py-8 gap-10 lg:grid-cols-3'>
                    {
                        TEAM.map((team) => (
                            <TeamCard
                                key={team.id}
                                rank={team?.rank}
                                name={team.name}
                                details={team.details}
                                image={team.image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}