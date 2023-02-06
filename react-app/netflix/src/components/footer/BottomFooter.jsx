import "./bottomfooter.css";

const BottomFooter = () => {
  return (
    <div className="bottomFooter">
      <div className="fiwcl">
        <h5>Questions? Call 900-759-105</h5>
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Legal Notices</p>
        <div className="en-sign">
          <select name="en-es" id="">
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
          <p>NetFlix Spain</p>
        </div>
      </div>
      <div className="hjtco">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
        <p>Only on Netflix</p>
      </div>
      <div className="arps">
        <p>Account</p>
        <p>Redeem Gift Cards</p>
        <p>Privacy</p>
        <p>speed Test</p>
      </div>

      <div className="mbcl">
        <p>Media Center</p>
        <p>Buy Gift Cards</p>
        <p>Cookies Preferances</p>
        <p>Legal Quarantee</p>
      </div>
    </div>
  );
};

export default BottomFooter;
