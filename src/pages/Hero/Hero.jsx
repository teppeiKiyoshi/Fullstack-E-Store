import blob from "../../assets/blob.png";
import heroImage from "../../assets/heroImage.png";
import "./Hero.css";
import Navbar from "../../components/navbar/Navbar";
import PromoSection from "../../components/promo-section/PromoSection";
import Testimonal from "../../components/testimonials/Testimonial";
import Blogs from "../../components/blog/Blogs";
import Video from '../../assets/bg.mp4';
import heroBanner from "../../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <>
      <div className="left-right-container">
       
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.black.500),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/4 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-black-600/10 ring-1 ring-black-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="left">
          <p className="main-title text-gray-600">Style Unleashed:</p>
          <p className="main-subtitle text-white">Dress to Impress!</p>
          <p className="main-description text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit vel mollitia doloribus error facilis nesciunt ipsam,
            eos harum obcaecati blanditiis.
          </p>

          <button className="left-hero__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>
            <div className="left-hero__button-text">Shop now!</div>
          </button>
        </div>
        {/* <div className="right">
          <img src={blob} className="blob img" />
          <img src={heroImage} className="hero img" />
        </div> */}
      </div>
      <PromoSection />
      <Blogs />
      <Testimonal />
    </>
  );
};

export default Hero;
