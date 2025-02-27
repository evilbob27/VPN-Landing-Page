import {testimonialsItems} from "@/data";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const carousel = () => {
    return (
        <Splide options={{rewind: true}}>
                    {testimonialsItems.map(({img, name, location, rate, quote}, key) => (
                        <SplideSlide key={key}>
                            <article className="flex justify-between">
                                <div className="flex ml-8 mt-8">
                                    <figure className="mr-6">
                                        <Image src={img} alt="profile picture" height={50} width={50}/>
                                    </figure>
                                    <cite className="flex flex-col not-italic text-lg font-medium">
                                        {name}
                                        <span className="not-italic text-sm text-slate-700 font-normal">
                                        {location}
                                    </span>
                                    </cite>
                                </div>
                                <span className="flex flex-row mt-8 mr-8 items-center">
                                    <p className="text-center">
                                        {rate}
                                    </p>
                                    <figure className="justify-center ml-2">
                                        <Image src="star.svg" alt="star" height={16} width={16}/>
                                    </figure>
                                </span>
                            </article>
                            <blockquote className="leading-normal mx-8 my-2">
                                {quote}
                            </blockquote>
                        </SplideSlide>
                    ))}
        </Splide>
    );
};

export default carousel;