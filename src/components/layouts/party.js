import { useState } from 'react';
import Image from 'next/image';

const Party = () => {
  const [bride, setBride] = useState(false);
  const [groom, setGroom] = useState(true);

  const toggle = (party) => {
    if (party === 1) {
      setGroom(!groom);
    } else if (party === 2) {
      setBride(!bride);
    }
  };

  return (
    <section className="party container">
      <header>
        <p>The Wedding Party</p>
        <div>
          <h2
            className={groom === true ? 'underline ' : '!text-[#ba96a4]'}
            onClick={(e) => {
              setBride(false), setGroom(true);
            }}
          >
            Groomsmen
          </h2>
          <h2
            className={bride === true ? 'underline' : '!text-[#ba96a4]'}
            onClick={(e) => {
              setBride(true), setGroom(false);
            }}
          >
            Bridemaids
          </h2>
        </div>
      </header>

      <div className="party_row">
        {groom ? (
          <>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Julian Bernard</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Julian Bernard</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Julian Bernard</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Julian Bernard</h3>
              </figcaption>
            </figure>
          </>
        ) : (
          ''
        )}
        {bride ? (
          <>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Jeanntte McCurdy</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Jeanntte McCurdy</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Jeanntte McCurdy</h3>
              </figcaption>
            </figure>
            <figure>
              <Image src="https://via.placeholder.com/200x200" alt="Groomsman" width={200} height={200} />
              <figcaption>
                <h3>Jeanntte McCurdy</h3>
              </figcaption>
            </figure>
          </>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default Party;
