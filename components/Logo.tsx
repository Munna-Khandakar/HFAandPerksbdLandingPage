import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/' className="border-0 md:border -ml-2 px-2 py-1 hover:border-primary hover:text-primary">
            <span className="font-normal md:font-bold text-sm md:text-xl">Perks Group</span>
        </Link>
    )
}

export default Logo