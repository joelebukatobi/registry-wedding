// React
import { useEffect } from 'react';

const Itinerary = ({ AOS }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="itinerary container">
      <header data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
        <h2>Itinerary</h2>
        <ul>
          <li>Saturday, May 13</li>
        </ul>
      </header>
      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" className="itinerary_card">
        <main>
          <p>10AM</p>
        </main>
        <aside>
          <h3>Wedding Ceremony</h3>
          <p>
            Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor
            viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
            adipiscing sem.
          </p>
        </aside>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" className="itinerary_card">
        <main>
          <p>1PM</p>
        </main>
        <aside>
          <h3>Wedding Reception</h3>
          <p>
            Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor
            viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
            adipiscing sem.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Itinerary;
