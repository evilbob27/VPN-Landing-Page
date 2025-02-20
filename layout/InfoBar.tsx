import {infoBarItems} from "@/data";
import Image from "next/image";

const InfoBar = () => {
    return (
        <section className="rounded-lg mt-36 px-16 py-10 mx-40 bg-white drop-shadow-xl">
            <ul className="grid grid-cols-3 gap-y-2">
                {infoBarItems.map(({id, img, number, name}) => (
                    <li key={id}
                        className={`flex flex-row place-content-center py-8 ${id !== 3 && "border-r-2 border-slate-100"}`}>
                        <figure className="bg-orange-100 rounded-full p-4 place-content-center">
                            <Image src={img} alt={name} height={28} width={28}/>
                        </figure>
                        <article className="flex flex-col ml-10">
                            <h4 className="font-bold text-2xl">
                                {number}
                            </h4>
                            <p className="text-slate-700 text-xl">
                                {name}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default InfoBar;