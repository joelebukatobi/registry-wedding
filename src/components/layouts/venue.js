// Next JS
import Link from 'next/link';
const Venue = () => {
  return (
    <section className="container venue">
      <header>
        <h2>The Venue</h2>
        <p>
          {`We want your wedding experience to be as stress-free and enjoyable as possible, which is why we understand
          that navigating around a city can be a bit overwhelming, especially if it's your first time visiting.
          Click the button to find your way to the venue.`}
          <br />
          <br />
          No 15, Wole Soyinka Avenue(Setraco), Gwarimpa Abuja.
          <br />
          (Close to Federal Staff Clinic)
        </p>
        <div>
          <button>
            <Link href="https://goo.gl/maps/f8b5bc2BNwFT7bDG6">Wedding Venue</Link>
          </button>
        </div>
      </header>

      <main></main>
    </section>
  );
};

export default Venue;
