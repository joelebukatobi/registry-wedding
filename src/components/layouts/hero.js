import Image from 'next/image';
import src from '@/images/hero-image.png';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero_date">
        <h4>Please join us to celebrate</h4>
        <h1>Owiata & Emmanuel</h1>
        <h4>On ~ Saturday, The 13th of May, 2023</h4>
      </div>
      <div className="hero_image">
        <Image src={src} alt="Hero Image" width={1121} height={659} />
      </div>
    </section>
  );
};

export default Hero;
