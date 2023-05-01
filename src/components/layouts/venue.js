const Venue = () => {
  return (
    <section className="container venue">
      <div className="venue_top">
        <div className="venue_left">
          <p>The Venue</p>
          <h2>Gino Winery Estate</h2>
          <p>
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros,
            accumsan purus enim nascetur quam diam felis, fringilla varius. 4750 Tyler AvenueBoise, Idaho 83705
          </p>
        </div>
        <div className="venue_right">
          <img src="https://via.placeholder.com/533x422.47" alt="venue_image" />
        </div>
      </div>
      <div className="venue_bottom">
        <div className="venue_right">
          <img src="https://via.placeholder.com/533x422.47" alt="venue_image" />
        </div>
        <div className="venue_left">
          <div className="venue_card">
            <p>Wedding Ceremony Venue</p>
            <p>
              Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros,
              accumsan purus enim nascetur quam diam felis, fringilla varius. 4750 Tyler AvenueBoise, Idaho 83705
            </p>
            <button>Map of Venue</button>
          </div>
          <div className="venue_card">
            <p>Wedding Reception Venue</p>
            <p>
              Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros,
              accumsan purus enim nascetur quam diam felis, fringilla varius. 4750 Tyler AvenueBoise, Idaho 83705
            </p>
            <button>View Hotels</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
