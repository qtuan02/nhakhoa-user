"use client";
import CTitle from "@/custom_antd/CTitle";
import CategoryHome from "./components/CategoryHome";
import SwiperHome from "./components/SwiperHome";
import SwiperServiceHome from "./components/SwiperServiceHome";
import SwiperDoctor from "./components/SwiperDoctor";

export default function HomeComponent() {

    return (
        <>
            <SwiperHome />
            <div className="mx-32 mt-20">
                <CTitle className="!text-center">Chăm sóc sức khỏe răng miệng toàn diện</CTitle>
                <CategoryHome />
                <br /><br />
                <SwiperServiceHome />
                <br /><br />
                <SwiperDoctor />
            </div>
        </>
    );
}