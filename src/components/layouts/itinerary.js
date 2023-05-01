import { useState } from 'react';

const Itinerary = () => {
  return (
    <section className="itinerary container">
      <header>
        <h2>Itinerary</h2>
        <ul>
          <li>Saturday, May 13</li>
        </ul>
      </header>
      <div className="itinerary_card">
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
      <div className="itinerary_card">
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
