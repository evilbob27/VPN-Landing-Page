import Image from "next/image";
import {sponsorsItems} from "@/data";

const Map = () => {
    return (
        <section className="flex flex-col items-center px-80 my-24 w-full bg-neutral-50">
            <article>
                <h2 className="font-medium text-4xl text-center leading-spaced mb-8">
                    Huge Global Network <br/>
                    of Fast VPN
                </h2>
                <p className="text-slate-700 text-center leading-normal">
                    See <span className="text-slate-700 font-medium">LaslesVPN</span> everywhere to make it easier for you when you move <br/>
                    locations.
                </p>
            </article>
            <figure className="mb-10 mt-36">
                <Image src="/global-map.svg" alt="global map" height={538} width={1060}/>
            </figure>
            <ul className="flex flex-row items-center justify-center">
                {sponsorsItems.map(({img, height, width}, key) => (
                <li key={key} className="flex flex-row items-center justify-start mx-6">
                    <figure>
                        <Image src={img} alt={img} height={height} width={width} />
                    </figure>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Map