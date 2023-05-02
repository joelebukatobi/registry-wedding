import Link from 'next/link';
const Registry = () => {
  return (
    <section className="registry container">
      <header>
        <h2>Registry</h2>
        <p>
          We feel truly blessed to have you share in our joy on our special day. Your presence at our wedding is all
          that we truly desire, but if you do wish to give a gift, we've created a wedding registry to make the process
          easier for you. We understand that finding the perfect gift for a wedding can be a challenge, so we've
          handpicked a selection of items that we know we'll love. T We've listed a few items below as a starting point.
          Once you've selected your gift, you can either purchase it online or visit the store in person.
        </p>
      </header>
      <main>
        <Link href="">
          <figure>
            <img src="https://via.placeholder.com/200x200" alt="Groomsman" />
          </figure>
        </Link>
        <Link href="">
          <figure>
            <img src="https://via.placeholder.com/200x200" alt="Groomsman" />
          </figure>
        </Link>
        <Link href="">
          <figure>
            <img src="https://via.placeholder.com/200x200" alt="Groomsman" />
          </figure>
        </Link>
      </main>
    </section>
  );
};

export default Registry;
