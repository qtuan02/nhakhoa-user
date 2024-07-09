import CCarousel from "@/custom_antd/CCarousel";
import { Image } from "antd";

export default function CarouselHome() {
    return (
        <CCarousel arrows infinite={false} autoplay autoplaySpeed={1000}>
            <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/1.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://imagev3.vietnamplus.vn/w660/Uploaded/2024/mzdic/2023_03_24/Cristiano_Ronaldo_Portugal_2403.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://imagev3.vietnamplus.vn/w660/Uploaded/2024/mzdic/2023_03_24/Cristiano_Ronaldo_Portugal_2403.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://imagev3.vietnamplus.vn/w660/Uploaded/2024/mzdic/2023_03_24/Cristiano_Ronaldo_Portugal_2403.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://imagev3.vietnamplus.vn/w660/Uploaded/2024/mzdic/2023_03_24/Cristiano_Ronaldo_Portugal_2403.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
        </CCarousel>
    );
}