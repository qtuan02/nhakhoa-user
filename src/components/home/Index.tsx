"use client";
import CategoryHome from "./components/CategoryHome";
import HotServiceHome from "./components/HotServiceHome";
import SwiperHome from "./components/SwiperHome";

export default function HomeComponent() {

    return (
        <>
            <SwiperHome />
            <div className="mx-32 mt-20">
                <CategoryHome />
                <br /><br />
                <HotServiceHome />
            </div>
        </>
    );
}