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
  title,
  description,
  url,
  type,
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
      <nav className="navbar container">
        <ul
          className={
            open
              ? `px-[2.4rem] w-full absolute top-0 z-10 h-[100vh] flex-col bg-[#33000df5] items-start pt-[40%]`
              : 'mt-[4rem] px-[2.4rem] bg-[unset] items-center justify-between'
          }
        >
          <li className={open ? '!block' : 'hidden'}>Home</li>
          <li className={open ? '!block' : 'hidden'}>Our Story</li>
          <li className={open ? '!block' : 'hidden'}>Venue</li>
          <li className={open ? 'absolute top-0 mt-[4rem] left-[2.4rem]' : ''}>
            <svg viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9563 49.4852C13.2136 49.4852 10.9209 48.4278 9.07846 46.3132C7.25692 44.1985 6.34615 41.7593 6.34615 38.9956C6.34615 37.2787 6.72302 35.6247 7.47676 34.0335C8.23051 32.4422 9.19362 31.0918 10.3661 29.9821C11.5595 28.8724 12.8681 27.9826 14.2918 27.3126C15.7365 26.6426 17.1288 26.3076 18.4688 26.3076C21.1907 26.3076 23.4728 27.3649 25.3153 29.4796C27.1578 31.5943 28.079 34.0335 28.079 36.7972C28.079 38.849 27.5242 40.859 26.4145 42.8271C25.3048 44.7743 23.7973 46.376 21.8921 47.6322C20.0077 48.8675 18.0291 49.4852 15.9563 49.4852ZM17.9035 47.0983C20.1857 47.0983 22.1014 46.2608 23.6508 44.5858C25.2211 42.9109 26.0062 40.8381 26.0062 38.3675C26.0062 35.8969 25.0955 33.6775 23.2739 31.7094C21.4733 29.7413 19.2854 28.7573 16.7101 28.7573C14.5117 28.7573 12.575 29.5529 10.9 31.1441C9.24596 32.7144 8.41894 34.5988 8.41894 36.7972C8.41894 39.6446 9.28784 42.0734 11.0256 44.0833C12.7844 46.0933 15.077 47.0983 17.9035 47.0983Z"
                fill={open ? '#fcf9f7' : '#73001d'}
              />
              <path
                d="M52.0595 36.9031H52.3906C51.9928 37.8452 51.5184 39.3411 50.8694 40.0948C49.6969 41.5395 48.4616 42.2618 47.1635 42.2618C46.9541 42.2618 46.7866 42.2409 46.661 42.199C46.6191 43.4762 46.3365 44.5963 45.813 45.5594C45.2896 46.5225 44.6091 47.2658 43.7716 47.7892C42.1176 48.8361 40.139 49.3595 37.8359 49.3595C35.5328 49.3595 33.7008 48.8256 32.3399 47.7578C30.9999 46.69 30.3299 45.2768 30.3299 43.518C30.3299 41.7384 30.9476 40.2728 32.1829 39.1212C33.4182 37.9487 34.8105 37.2369 36.3599 36.9856C34.9152 36.9228 33.7846 36.4936 32.968 35.698C32.1724 34.8814 31.7746 33.8869 31.7746 32.7144C31.7746 30.7882 32.5493 29.2598 34.0986 28.1292C35.6689 26.9985 37.5323 26.4332 39.6889 26.4332C41.8454 26.4332 43.5204 26.831 44.7138 27.6267L44.3369 31.2697L43.7716 31.1441C43.7716 29.2179 41.636 28.3176 38.2442 28.3176C35.3967 28.3176 33.973 29.4691 33.973 31.7722C33.973 32.8819 34.5174 33.8032 35.6061 34.536C36.7158 35.2688 38.2651 35.6666 40.2542 35.7294L40.16 36.7972C39.9297 36.8809 39.5633 37.0066 39.0608 37.174C38.5583 37.3206 38.1709 37.4462 37.8987 37.5509C37.6266 37.6347 37.2706 37.7708 36.8309 37.9592C36.3913 38.1267 36.0458 38.2942 35.7946 38.4617C35.5642 38.6292 35.2921 38.8595 34.978 39.1526C34.6849 39.4248 34.4546 39.7179 34.2871 40.032C33.9102 40.8067 33.7218 41.6651 33.7218 42.6073C33.7218 43.9263 34.2243 45.0674 35.2292 46.0305C36.2342 46.9936 37.6266 47.4752 39.4062 47.4752C41.1859 47.4752 42.641 47.0669 43.7716 46.2503C44.9023 45.4338 45.4676 44.1462 45.4676 42.3874C45.4676 41.8012 44.8604 41.5081 43.646 41.5081C42.8504 41.5081 42.1909 41.7174 41.6674 42.1362C41.144 42.5549 40.5892 43.2458 40.0029 44.209L39.8086 44.1874C41.3789 41.0468 42.4945 39.2468 44.5254 39.2468C45.1326 39.2468 45.8549 39.362 46.6924 39.5923C47.5508 39.8226 48.1057 39.9378 48.3569 39.9378C49.0688 39.9378 49.6655 39.7284 50.147 39.3096C50.6286 38.8909 51.557 37.8243 52.0595 36.9031Z"
                fill={open ? '#fcf9f7' : '#73001d'}
              />
              <path
                d="M69.586 48.857H52.7525V47.9777H53.8203C54.4275 47.9777 54.8253 47.8625 55.0137 47.6322C55.2231 47.4019 55.3278 47.0355 55.3278 46.533V29.197C55.3278 28.7782 55.1917 28.4327 54.9195 28.1606C54.6683 27.8884 54.3018 27.7523 53.8203 27.7523H52.7525V26.8729H69.3348L69.586 31.2069L68.7067 31.3954C68.7067 30.6416 68.4031 29.9193 67.7959 29.2284C67.1887 28.5374 66.3408 28.192 65.252 28.192H59.5362C58.908 28.192 58.4998 28.3176 58.3113 28.5688C58.1229 28.7991 58.0287 29.1341 58.0287 29.5738V36.7344H64.3099C64.6239 36.7344 64.8647 36.7239 65.0322 36.703C65.1997 36.6611 65.3462 36.5459 65.4719 36.3575C65.6184 36.1691 65.6917 35.8969 65.6917 35.5409V34.0963H66.6339V40.6287H65.6917V39.3096C65.6917 38.7862 65.5766 38.4512 65.3462 38.3047C65.1159 38.1372 64.7705 38.0534 64.3099 38.0534H58.0287V46.1561C58.0287 46.5958 58.1229 46.9413 58.3113 47.1925C58.4998 47.4228 58.908 47.538 59.5362 47.538H65.5033C66.6129 47.538 67.5865 47.1821 68.424 46.4702C69.2825 45.7583 69.7326 45.0674 69.7745 44.3974L70.6538 44.523L69.586 48.857Z"
                fill={open ? '#fcf9f7' : '#73001d'}
              />
              <circle
                cx="38.5"
                cy="38"
                r="37.4933"
                stroke={open ? '#fcf9f7' : '#73001d'}
                strokeWidth="1.01333"
                id="logo-four"
              />
            </svg>
          </li>
          <li className={open ? 'absolute top-0 mt-[4rem] right-[2.4rem]' : ''} onClick={(e) => toggle()}>
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z"
                  fill={open ? '#fcf9f7' : '#73001d'}
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 8H20M4 16H20"
                  stroke={open ? '#fcf9f7' : '#73001d'}
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="square"
                />
              </svg>
            )}
          </li>
          <li className={open ? '!block' : 'hidden'}>Itinerary</li>
          <li className={open ? '!block' : 'hidden'}>Registry</li>
          <li className={open ? '!block' : 'hidden'}>RSVP</li>
        </ul>
      </nav>
    </>
  );
}
