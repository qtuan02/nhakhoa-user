"use client"
import CModal from "@/custom_antd/CModal";
import { useState } from "react";

export default function ModalAppoiment() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const itemServices = [
        {
            key: "dm1",
            label: "Danh mục 1",
            image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020749/nguyenkim/uxwj6qayfglhlvixlzmo.jpg",
            children: [
                {
                    key: 1,
                    label: "Dịch vụ 1",
                    image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020753/nguyenkim/zdwlxev8qnllx4v43yba.png",
                    min: 2000000,
                    max: 5000000,
                    unit: "unit"  
                },
                {
                    key: 2,
                    label: "Dịch vụ 2",
                    image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020753/nguyenkim/zdwlxev8qnllx4v43yba.png",
                    min: 200000,
                    max: 400000,
                    unit: "unit"  
                }
            ]
        },
        {
            key: "dm2",
            label: "Danh mục 2",
            image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020749/nguyenkim/uxwj6qayfglhlvixlzmo.jpg",
            children: [
                {
                    key: 3,
                    label: "Dịch vụ 3",
                    image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020753/nguyenkim/zdwlxev8qnllx4v43yba.png",
                    min: 2000000,
                    max: 5000000,
                    unit: "unit"  
                },
                {
                    key: 4,
                    label: "Dịch vụ 4",
                    image: "https://res.cloudinary.com/dxv3nf1jb/image/upload/v1718020753/nguyenkim/zdwlxev8qnllx4v43yba.png",
                    min: 200000,
                    max: 400000,
                    unit: "unit"  
                }
            ]
        }
    ];

    return (
        <CModal>

        </CModal>
    );
}