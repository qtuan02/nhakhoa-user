"use client";
import CarouselHome from "./components/CarouselHome";
import CategoryHome from "./components/CateogoryHome";
import DoctorHome from "./components/DoctorHome";
import ServiceHome from "./components/ServicceHome";

export default function HomeComponent() {
    return (
        <>
            <CarouselHome />
            <CategoryHome/>
            <ServiceHome/>
            <DoctorHome/>
        </>
    );
}