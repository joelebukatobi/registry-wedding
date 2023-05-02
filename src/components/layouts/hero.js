// React
import { useEffect } from 'react';
// Next
import Image from 'next/image';
// Components
import src from '@/images/hero-image.png';

const Hero = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero container">
      <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="600" className="hero_date">
        <h4>Please join us to celebrate</h4>
        <h1>Owiata & Emmanuel</h1>
        <h4>On ~ Saturday, The 13th of May, 2023</h4>
      </div>
      <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="900" className="hero_image">
        <Image src={src} alt="Hero Image" width={1121} height={659} />
      </div>
    </section>
  );
};

export default Hero;
