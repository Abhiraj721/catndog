import "./styles.css";
import logo from "./Cat-N-Dog-Logo copy.png";
export default function Navbar() {
  return (
    <div
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h3>
        <img src={logo} />
      </h3>
      <div className="navbtn" style={{ display: "flex" }}>
        <p>Aboout</p>
        <p>Blog</p>
        <p>Carrier</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
