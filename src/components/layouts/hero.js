// React
import { useEffect } from 'react';
// Next
import Image from 'next/image';
// Components
import src from '@/images/hero-image.png';
// Utils
import { images } from '@/utils/images';
// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//
const Hero = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero container">
      <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="600" className="hero_date">
        <h4>Please join us to celebrate</h4>
        <h1>Owaita & Emmanuel</h1>
        <h4>On ~ Saturday, The 13th of May, 2023</h4>
      </div>
      <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="900" className="hero_image">
        {/* <Image src={src} alt="Hero Image" width={1121} height={659} /> */}
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image src={image.item} alt="Hero Image" width={1121} height={659} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
