import {plansItems} from "@/data";
import Image from "next/image";

const Plans = () => {
    return (
        <section className="flex flex-col items-center mt-16 mb-16">
            <article className="flex flex-col items-center justify-center">
                <h2 className="text-4xl font-medium py-8">Choose Your Plan</h2>
                <p className="text-slate-700 text-center leading-normal"> Let&apos;s choose the package that is best for
                    you
                    and explore it happily and<br/>
                    cheerfully.</p>
            </article>
            <ul className="flex flex-row justify-around mx-80 mt-16">
                {plansItems.map(({id, img, name, price, list}) => (
                    <a href="#" key={id}
                       className="flex flex-col items-center justify-start border-2 border-slate-200 rounded-xl mx-6 w-[20.5rem] group hover:border-red-600">
                        <li className="flex flex-col flex-grow items-center justify-start">
                            <figure className="mt-20">
                                <Image src={img} alt={name} height={165} width={145}/>
                            </figure>
                            <h4 className="text-[18px] font-medium mt-7 mb-5">
                                {name}
                            </h4>
                            <ul className="flex-1 mb-[2.75rem]">
                                {list.map((listItem, key) => (
                                    <li key={key} className="flex flex-row">
                                        <figure className="flex">
                                            <Image src="/green-check.svg" alt="checkmark" height={24} width={24}
                                                   className="place-content-center"/>
                                        </figure>
                                        <p className="text-sm text-slate-700 my-3">{listItem}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-2xl font-medium mb-4">
                                {price} <span
                                className={`text-slate-700 font-normal ${id === 1 && "hidden"}`}>/ mo</span>
                            </h3>
                            <button
                                className="px-14 py-2 border-2 border-red-600 rounded-3xl font-bold text-red-600 mb-12 group-hover:bg-red-600 group-hover:text-white">
                                Select
                            </button>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    );
}

export default Plans;