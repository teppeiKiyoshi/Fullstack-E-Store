import blob from "../../assets/blob.png";
import heroImage from "../../assets/heroImage.png";
import "./Hero.css";
import HeroButton from "../../components/buttons/heroButton";

const Hero = () => {
  return (
    <div className="left-right-container">
      <div className="left">
        <p className="main-title">Style Unleashed:</p>
        <p className="main-subtitle">Dress to Impress!</p>
        <p className="main-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel mollitia doloribus error facilis nesciunt ipsam, eos harum obcaecati blanditiis.</p>
        <button className="left-hero-button">Grab Amazing Deals!</button>
      </div>
      <div className="right">

        <img src={blob} className="blob img" />
        <img src={heroImage} className="hero img" />

      </div>
    </div>
  );
};

export default Hero;
