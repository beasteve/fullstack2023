import "./second.css";

const Second = () => {
  return (
    <div className="second">
      <div className="leftSecond">
        <h1 className="enjoy">Enjoy on your TV.</h1>
        <p className="smart">
          Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV,
          Blu-ray players, and <br />
          more.
        </p>
      </div>
      <div className="rightSecond">
        <img
          className="imgSrc"
          src="https://netflix-images.manikantp.repl.co/Netflix1.gif"
          alt=""
        />
        {/* <img
          
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Second;
