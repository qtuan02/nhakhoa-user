"use client";
import CarouselHome from "./components/CarouselHome";
import CategoryHome from "./components/CategoryHome";

export default function HomeComponent() {

    return (
        <>
            <CarouselHome />
            <div className="mx-28">
                <CategoryHome />
            </div>
        </>
    );
}