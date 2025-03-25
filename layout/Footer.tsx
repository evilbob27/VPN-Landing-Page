import Image from "next/image";
import {footerImages, footerItems} from "@/data";

const Footer = () => {
    return (
        <footer className="bg-gray-200 flex flex-row justify-around pt-52 pb-16">
            <article className="ml-44">
                <figure className="mb-6">
                    <Image src="/logo.svg" alt="logo" height={36} width={149}/>
                </figure>
                <p className="text-slate-700">
                    <span className="text-slate-700 font-semibold">LaslesVPN</span> is a private virtual network
                    that <br/>
                    has unique features and has high security.
                </p>
                <ul className="flex flex-row mt-6">
                    {footerImages.map(({img, height, width}, key) => (
                        <li key={key} className="m-0 p-0">
                            <Image src={img} alt={img} height={height} width={width}/>
                        </li>
                    ))}
                </ul>
                <p className="text-slate-300">
                    ©2020Lasles<span className="font-medium">VPN</span>
                </p>
            </article>
            <article className="mr-28">
                <ul className="flex flex-row">
                    {footerItems.map(({id, header, list}) => (
                        <li key={id}>
                            <h3 className="text-lg font-medium text-slate-900 mb-8 mx-16">
                                {header}
                            </h3>
                            <ul className="mx-16">
                                {list.map((listItem, key)=> (
                                <li key={key} className="text-slate-700 my-4">
                                    {listItem}
                                </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>
        </footer>
    );
}

export default Footer;