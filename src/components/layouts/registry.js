import Link from 'next/link';
const Registry = () => {
  return (
    <section className="registry container">
      <header>
        <h2>Registry</h2>
        <p>
          Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra
          magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing
          sem.
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
