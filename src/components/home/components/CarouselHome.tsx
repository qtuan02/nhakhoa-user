import CCarousel from "@/custom_antd/CCarousel";
import { Image } from "antd";

export default function CarouselHome() {
    return (
        <CCarousel  arrows infinite={false} autoplay autoplaySpeed={1000} >
            <video height="500px" width="100%"  autoPlay muted loop>
                <source src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-web_2800x898-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.</video>
            <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/1.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/07/Coverwebdesktop-snhat-PW-1.jpg" alt="..." height="500px" width="100%" preview={false} />
            <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-Web-desktop.jpg.webp" alt="..." height="500px" width="100%" preview={false} />
        </CCarousel>
    );
}