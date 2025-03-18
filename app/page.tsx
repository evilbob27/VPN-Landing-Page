import Header from "@/layout/Header";
import Hero from "@/layout/Hero";
import InfoBar from "@/layout/InfoBar";
import Plans from "@/layout/Plans";
import Features from "@/layout/Features";
import Map from "@/layout/Map";
import Testimonials from "@/layout/Testimonials";
import Subscribe from "@/layout/Subscribe";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <InfoBar />
            <Features />
            <Plans />
            <Map />
            <Testimonials />
            <Subscribe />
        </>
    );
}
