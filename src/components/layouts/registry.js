// React
import { useEffect } from 'react';
// Next
import Link from 'next/link';
import Image from 'next/image';
// Utils
import { gift } from '@/utils/gifts';

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//
const Registry = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="registry container">
      <header data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
        <h2>Registry</h2>
        <p>
          {`   We feel truly blessed to have you share in our joy on our special day. Your presence at our wedding is all
          that we truly desire, but if you do wish to give a gift, we've created a wedding registry to make the process
          easier for you. We understand that finding the perfect gift for a wedding can be a challenge, so we've
          handpicked a selection of items that we know we'll love.
          Once you've selected your gift, you can either purchase it online or visit the store in person.`}
        </p>
      </header>
      <main data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" className="border-red-600" h->
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
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
          {gift.map((gift) => (
            <SwiperSlide key={gift.id}>
              <Link href={gift.link}>
                <figure>
                  <Image src={gift.item} alt="Groomsman" width={200} height={200} />
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
};

export default Registry;
