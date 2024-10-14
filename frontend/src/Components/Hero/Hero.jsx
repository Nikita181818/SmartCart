import Hero_icon from "./../Assets/hero_image.png";
import hand_icon from "./../Assets/hand_icon.png";
import arrow from "./../Assets/arrow.png";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="landing-page-div">
        <div className="right-part">
          <img src={Hero_icon} alt="hero_image" className="hero_icon" />
        </div>

        <div className="left-part">
          <div className="first-line">
            <img src={hand_icon} alt="hand_icon" className="hand_icon" />
            <p>new</p> <br />
          </div>

          <p className="second-line">collections</p>
          <br />
          <p className="third-line">for smart gen</p>
          <br />
          <div className="button-div">
            <button className="latest_collection">Latest Collection</button>
            <img src={arrow} alt="arrow_logo" className="arrow-name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;