import blob from "../../assets/blob.png";
import heroImage from "../../assets/heroImage.png";
import "./Hero.css";
import Navbar from "../../components/navbar/Navbar";
import PromoSection from '../../components/promo-section/PromoSection';
import Testimonal from '../../components/testimonials/Testimonial';
import Blogs from '../../components/blog/Blogs';

const Hero = () => {
  return (
    <>
     <Navbar/>
    <div className="left-right-container">
      <div className="left">
        <p className="main-title">Style Unleashed:</p>
        <p className="main-subtitle">Dress to Impress!</p>
        <p className="main-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel mollitia doloribus error facilis nesciunt ipsam, eos harum obcaecati blanditiis.</p>

        <button className="left-hero__button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
          </svg>
          <div className="left-hero__button-text">
            Shop now!
          </div>
        </button>

      </div>
      <div className="right">

        <img src={blob} className="blob img" />
        <img src={heroImage} className="hero img" />

      </div>
    </div>
    <PromoSection/>
    <Blogs/>
    <Testimonal/>
    </>
  );
};

export default Hero;
