"use client";
import CarouselHome from "./components/CarouselHome";
import CategoryHome from "./components/CategoryHome";
import HotServiceHome from "./components/HotServiceHome";

export default function HomeComponent() {

    return (
        <>
            <CarouselHome />
            <div className="mx-28">
                <CategoryHome />
                <br />
                <HotServiceHome />
            </div>
        </>
    );
}