import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data";

const Header = () => {
    return (
        <header className="flex flex-row justify-between mx-auto max-w-[1300px] w-full py-[60px] px-6">
            <figure>
                <Image src="/logo.svg" alt="logo" height={36} width={149}/>
            </figure>
            <nav className="flex flex-col justify-center">
                <ul className="flex flex-row lg:gap-x-10 sm:gap-x-4 md:gap-x-6 text-slate-700">
                    { navItems.map((navItem, key) => (
                        <li key={ key }>
                            <a href={ navItem.href }>
                                { navItem.name }
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="flex flex-row gap-8">
                <li className="text-center flex flex-col justify-center">
                    <Link href="#" className="font-semibold hover:text-red-600">Sign In</Link>
                </li>
                <li className="border border-red-600 rounded-3xl text-center flex flex-col justify-center px-12 py-2.5 group hover:bg-red-600">
                    <Link href="#" className="text-red-600 font-semibold group-hover:text-white">Sign Up</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header