import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
            <header className="flex flex-row justify-between px-8 mx-auto max-w-[1440px] w-full py-[60px]">
                <figure>
                    <Image src="/logo.svg" alt="logo" height={36} width={149}/>
                </figure>
                <nav className="flex flex-col justify-center">
                    <ul className="flex flex-row lg:gap-x-10 sm:gap-x-4 md:gap-x-6 text-slate-700">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </nav>
                <ul className="flex flex-row gap-8">
                    <li className="text-center flex flex-col justify-center">
                        <Link href="#" className="font-semibold">Sign In</Link>
                    </li>
                    <li className="border border-orange-100 rounded-3xl text-center flex flex-col justify-center px-12">
                        <Link href="#" className="text-orange-100 font-semibold">Sign Up</Link>
                    </li>
                </ul>
            </header>
    );
}

export default Header