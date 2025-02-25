import Image from "next/image";
import {featuresItems} from "@/data";

const Features = () => {
    return (
        <section className="flex flex-row items-center justify-around px-80 my-24 w-full">
            <figure>
                <Image src="/features-illustration.svg" alt="Person on laptop extending left arm" height={415}
                       width={508}/>
            </figure>
            <article className="flex flex-col items-start justify-end mt-20">
                <h2 className="font-medium text-4xl leading-spaced">
                    We Provide Many <br />
                    Features You Can Use
                </h2>
                <p className="text-slate-700 leading-normal mt-4">
                    You can explore the features that we provide with fun and <br />
                    have their own functions each feature.
                </p>
                <ul>
                    {featuresItems.map(({feat}, key) => (
                        <li key={key} className="flex flex-row items-center justify-start my-6">
                            <Image src="/white-check.svg" alt="checkmark" height={24} width={24} className="mr-2"/>
                            <p className="text-slate-700 text-sm">
                                {feat}
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default Features