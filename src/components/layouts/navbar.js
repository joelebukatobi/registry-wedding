// React
import { useState } from 'react';
// Next JS
import Head from 'next/head';
import Link from 'next/link';
// import dynamic from 'next/dynamic';

// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//   ssr: false,
// });

export default function Navbar({
  project,
  resume,
  blog,
  contact,
  title,
  description,
  keywords,
  url,
  type,
  article_publisher,
  article_section,
  article_author,
  site_name,
  image,
  image_type,
  image_alt,
  image_width,
  image_height,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content={site_name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content={image_type} />
        <meta property="og:image:alt" content={image_alt ? `${image_alt}` : 'portfolio-open-graph-preview-image'} />
        <meta property="og:image:width" content={image_width} />
        <meta property="og:image:height" content={image_height} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
      </Head>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color="212, 85, 36"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
        outerStyle={{ backgroundColor: '#f9b1711a', border: '.05rem solid #f9b1711a' }}
      /> */}
      <div className="navbar container border-2 border-red-600"></div>
    </>
  );
}

Navbar.defaultProps = {
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
