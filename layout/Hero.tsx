import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-row justify-around ml-[7.125rem] px-[5rem]">
            <div className=" flex flex-col my-auto">
                <div className="w-[33.5rem] mb-12">
                    <h1 className="text-5xl font-medium leading-[5rem] mb-8">
                        Want anything to be easy with <span className="font-bold text-5xl">LaslesVPN.</span>
                    </h1>
                    <p className="text-slate-700 mb-4">Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span></p>
                    <p className="text-slate-700">discover interesting features from us.</p>
                </div>
                <button className="bg-orange-100 hover:bg-orange-700 text-white font-bold rounded-lg justify-items-start w-[15rem] h-14 shadow-orange-100 shadow-lg">
                    Get Started
                </button>
            </div>
            <figure>
                <Image src="/hero-illustration.svg" alt="Person working on laptop" height={200} width={800} />
            </figure>
        </div>

    );
}

export default Hero;