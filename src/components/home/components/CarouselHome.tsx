import CCarousel from "@/custom_antd/CCarousel";
import { Image } from "antd";

export default function CarouselHome() {
    return (

        <CCarousel arrows infinite={true} draggable >
            <video className="carousel-media" autoPlay muted loop>
                <source src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-web_2800x898-1.mp4" type="video/mp4" />
            </video>
            <Image className="carousel-media" src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/1.jpg.webp" alt="..." preview={false} />
            <Image className="carousel-media" src="https://nhakhoaparkway.com/wp-content/uploads/2024/07/Coverwebdesktop-snhat-PW-1.jpg" alt="..." preview={false} />
            <Image className="carousel-media" src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-Web-desktop.jpg.webp" alt="..." preview={false} />
        </CCarousel>
    );
}