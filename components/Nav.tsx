import Link from "next/link";

//Hooks
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

const links = [
    {path: '/', name: 'home'},
    {path: '/about', name: 'about'},
    {path: '/gallery', name: 'gallery'},
    {path: '/services', name: 'services'},
    {path: '/target', name: 'target'},
    {path: '/contact', name: 'contact'},
]

type NavProps = {
    containerStyles: string;
    linkStyles: string;
    underlineStyles: string;
}

const Nav = (props: NavProps) => {
    const {containerStyles, linkStyles, underlineStyles} = props;

    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {
                links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`uppercase ${linkStyles}`}
                        >
                            {link.path === path && (
                                <motion.span
                                    initial={{y: '-100%'}}
                                    animate={{y: 0}}
                                    transition={{type: 'tween'}}
                                    layoutId='underline'
                                    className={`${underlineStyles}`}
                                />
                            )}
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav