// import Carousel from "@/ui/Carousel";
import {Splide, SplideSlide} from "@splidejs/react-splide";


const Testimonials = () => {
    return (
        <section className="flex flex-col items-center px-80 w-full pb-44 bg-neutral-50">
            <article>
                <h2 className="text-center leading-spaced text-4xl font-medium mb-8">
                    Trusted by Thousands of <br/>
                    Happy Customers
                </h2>
                <p className="text-center leading-normal text-slate-700">
                    These are the stories of our customers who have joined us with great <br/>
                    pleasure when using this crazy feature.
                </p>
            </article>
            {/*<Splide aria-label="My Favorite Images">*/}
            {/*    <SplideSlide>*/}
            {/*        <img src="#" alt="Image 1"/>*/}
            {/*    </SplideSlide>*/}
            {/*    <SplideSlide>*/}
            {/*        <img src="#" alt="Image 2"/>*/}
            {/*    </SplideSlide>*/}
            {/*</Splide>*/}
        </section>
    );
}

export default Testimonials;