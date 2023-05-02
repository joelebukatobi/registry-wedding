import Image from 'next/image';
import src from '@/images/our-story.png';

const Story = () => {
  return (
    <section className="story container">
      <header>
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
      <div className="story_image">
        <Image src={src} alt="Our Story Image" width={1007} height={566} />
      </div>
    </section>
  );
};

export default Story;
