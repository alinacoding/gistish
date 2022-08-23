import logo from "../../static/Octocat.png";
import "./Logo.styles.css";

const Logo = () => {
  return (
    <div className="logo-main">
      <img src={logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
