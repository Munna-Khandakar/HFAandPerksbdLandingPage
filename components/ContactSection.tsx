'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import {desVariants, tagVariants, titleVariants} from "@/utils/animation";

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'One place you may rely on for quality service.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: '4.7', href: '#'},
        author: {
            name: 'Muhammad Alamgir',
            role: '03 months ago',
            href: '#',
            imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjX0f_iOAMtUldlXeXmm_gV8V0WXMgSCaDuv45KhLj_uOBkjObsh=w60-h60-p-rp-mo-ba3-br100',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'Outstanding support provided from perks auto and it will be an excellent memory to purchase SUV from them.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: '4.9', href: '#'},
        author: {
            name: 'Shams Alam',
            role: '07 months ago',
            href: '#',
            imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXHTyO5ts17UH4KHD6VLFVjB7A1EWp_aCnqIuwwGP8gnBSPdtfV_w=w60-h60-p-rp-mo-br100',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Well, i had to choose a main reason for rating your great theme. Everything in this theme is customizable, easy to use and it has a very high quality styling',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: '4.2', href: '#'},
        author: {
            name: 'Khairul Islam',
            role: '11 months ago',
            href: '#',
            imageUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLHF1i95JNuz_5XBU_Q-Yu2PcfqzlzSu8KE0UF-nMqATK7KqdcP=w60-h60-p-rp-mo-br100',
        },
    },
];

export default function ContactSection() {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tight sm:text-4xl">Customer Reviews
                </motion.h2>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="mt-2 text-lg leading-8 text-muted-foreground">
                    Check our customers feedback from google review.
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article
                                key={post.id}
                                className="flex max-w-xl flex-col items-start justify-between"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime}>
                                        <Image src="/image/star.svg" width={80} height={5} alt={''}/>
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>

                                <div className="group relative">
                                    {/*<h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">*/}
                                    {/*    <a href={post.href}>*/}
                                    {/*        <span>{post.title}</span>*/}
                                    {/*    </a>*/}
                                    {/*</h3>*/}
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt=""
                                         className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href={post.author.href}>
                                                <span/>
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}