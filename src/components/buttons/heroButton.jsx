import "./hero-button.css";

const heroButton = () => {
  return (
    <div className="light-button">
      <button className="bt">
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <div className="button-holder">
          <p>Grab Amazing Deals!</p>
        </div>
      </button>
    </div>
  );
};

export default heroButton;
