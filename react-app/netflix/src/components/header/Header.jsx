import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="topHeader">
        <h1 className="logo">NetFlix</h1>
        <div className="en-sign">
          <select name="lang" id="">
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
          <button className="btn">Sign In</button>
        </div>
      </div>
      <div className="middleHeader">
        <h1 className="unlimit">Unlimited movies, TV </h1>
        <h1 className="shows">shows, and more.</h1>
        <h4 className="watch">Watch anywhere. Cancel anytime.</h4>

        <h4 className="Ready">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="input-get">
          <input type="text" name="" id="" placeholder="Email Address" />
          <button>Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
