// React
import { useEffect } from 'react';

const RSVP = ({ AOS }) => {
  //
  useEffect(() => {
    AOS.init();
  }, []);
  //
  return (
    <section className="rsvp container">
      <header data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
        <h2>RSVP</h2>
        <p>
          {`   We hope you can join us on our special day! To let us know if you can make it, please RSVP by [date] by
          clicking the button below. We kindly ask that you include the names of all guests attending in your response.
          If you have any questions or need to make changes to your RSVP, please don't hesitate to contact us. You can
          reach us by phone on +2349038395532 or 
          +2348170437946`}
        </p>
      </header>
    </section>
  );
};

export default RSVP;
