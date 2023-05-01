import Navbar from '@/layouts/navbar';
import Container from '@/layouts/container';
import Hero from '@/layouts/hero';
import Divider from '@/layouts/divider';
import Story from '@/layouts/story';
import Venue from '@/layouts/venue';
import Party from '@/layouts/party';
import Itinerary from '@/layouts/itinerary';
import Registry from '@/layouts/registry';
import RSVP from '@/layouts/rsvp';
import Copyright from '@/layouts/copyright';

const Home = ({
  title,
  site_name,
  description,
  url,
  type,
  image,
  image_type,
  image_alt,
  image_width,
  image_height,
}) => {
  return (
    <>
      <Navbar
        title={title}
        site_name={site_name}
        description={description}
        url={url}
        type={type}
        image={image}
        image_type={image_type}
        image_alt={image_alt}
        image_width={image_width}
        image_height={image_height}
      />
      <Hero />
      <Divider />
      <Story />
      <Divider />
      <Party />
      <Divider />
      <Itinerary />
      <Divider />
      <Registry />
      <Divider />
      <RSVP />
      <Divider />
      <Venue />
      <Copyright />
    </>
  );
};

export default Home;

Home.defaultProps = {
  title: 'Owi & Emmanuel',
  site_name: 'Wedding Registry',
  description: `Hi, there I'm a web developer who is passionate about solving problems with code and transforming ideas from pixels perfect designs to scalable products. My job description entails creating and building amazing experiences for the next billion users. My main focus is front-end development and user-interface design. At the moment I’m
  currently transitioning into a fullstack role while exploring the world of DevOps as well as technical writing.`,
  url: 'https://www.joelebukatobi.dev',
  type: 'profile',
  image: 'https://www.joelebukatobi.dev/images/og-image.png',
  image_type: 'image/jpg',
  image_alt: 'Open Graph Image',
  image_width: '1200',
  image_height: '627',
};
