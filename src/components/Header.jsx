import profilePic from "../assets/profile_pic.png";

function Header() {
  return (
    <div id="header">
      <div className="header-background">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>

      <img className="profile-pic" src={profilePic} alt="Profile Picture" />
      <h1 className="fx-typewriter" style={{ "--chars": 12 }}>LAKSUMI SOMA</h1>
      <h3>Software Engineer</h3>
      <p>Engineer by training, creative by nature. I build software that works and feels good to use.</p>
    </div>
  );
}

export default Header;