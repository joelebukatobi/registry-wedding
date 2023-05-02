// React
import { useEffect } from 'react';
// Next
import Image from 'next/image';
// Components
import src from '@/images/our-story.png';

const Story = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="story container">
      <header data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
        <h2>Our Story</h2>
        <p>
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros,
          accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices.
          <br />
          <br />
          Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit eros vitae. Maecenas suspendisse
          tincidunt ullamcorper justo neque quis et, laoreet. Vitae lacus, aliquet lorem mauris, sit dolor sodales.
          Nullam quam quis lorem dui tristique massa enim.
          <br />
          <br />
          Faucibus sed egestas mollis vivamus et sed sed.
        </p>
      </header>
      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" className="story_image">
        <Image src={src} alt="Our Story Image" width={1007} height={566} />
      </div>
    </section>
  );
};

export default Story;
