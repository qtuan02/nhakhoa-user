import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import { Image } from 'antd';

export default function SwiperHome() {
    return (
        <Swiper
            className='w-[95%]'
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            autoplay={{
                delay: 12000,
                // disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <video autoPlay muted loop>
                    <source src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-web_2800x898-1.mp4" type="video/mp4" />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/1.jpg.webp" alt="..." preview={false} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/07/Coverwebdesktop-snhat-PW-1.jpg" alt="..." preview={false} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/banner-Web-desktop.jpg.webp" alt="..." preview={false} />
            </SwiperSlide>
        </Swiper>
    );
}