// React
import { useEffect } from 'react';
// Next
import Link from 'next/link';
// Component
import Image from 'next/image';
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
          handpicked a selection of items that we know we'll love. T We've listed a few items below as a starting point.
          Once you've selected your gift, you can either purchase it online or visit the store in person.`}
        </p>
      </header>
      <main data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
        <Link href="">
          <figure>
            <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
          </figure>
        </Link>
        <Link href="">
          <figure>
            <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
          </figure>
        </Link>
        <Link href="">
          <figure>
            <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
          </figure>
        </Link>
      </main>
    </section>
  );
};

export default Registry;
