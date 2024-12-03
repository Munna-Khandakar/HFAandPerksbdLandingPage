import {motion} from "framer-motion";
import {titleVariants} from "@/utils/animation";
import Image from "next/image";

type TeamCardProps = {
    rank?: string;
    name?: string;
    details?: string;
    image?: string;
}

export const TeamCard = (props: TeamCardProps) => {
    const {rank = '', name = '', details = '', image = '/image/profile2.jpg'} = props
    return (
        <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='border-2 border-primary'>
            <div
                className='p-4 border text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src={image} width={200} height={200} alt=''
                       className='mx-auto rounded-full w-[10rem] h-[10rem]'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>{rank}</h2>
                <p className='text-sm'>
                    {name}
                </p>
                <p className='text-sm mt-2'>
                    {details}
                </p>
            </div>
        </motion.div>
    )
}