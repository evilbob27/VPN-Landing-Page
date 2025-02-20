import Image from "next/image";

const Hero = () => {
    return (
        <section className="grid grid-cols-2 max-w-[1300px] mx-auto px-6 gap-16 bg-white">
            <article className=" flex flex-col my-auto">
                <h1 className="text-5xl font-medium leading-[4.5rem] mb-8">
                    Want anything to be <br />
                    easy with <span className="font-bold text-5xl">LaslesVPN.</span>
                </h1>
                <p className="text-slate-700 mb-2">Provide a network for all your needs with ease and fun using <span
                    className="font-medium">LaslesVPN</span></p>
                <p className="text-slate-700 mb-16">discover interesting features from us.</p>

                <button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl justify-items-start w-[15rem] h-14">
                    Get Started
                </button>
            </article>
            <figure className="-mr-[100px]">
                <Image src="/hero-illustration.svg" alt="Person working on laptop" height={200} width={800}/>
            </figure>
        </section>

    );
}

export default Hero;