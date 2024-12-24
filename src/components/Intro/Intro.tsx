import video from "../../assets/video.mp4";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-heading">Profesionální tetovací studio v Čechách</h1>
      <Link to="/order">
        <button className="button-make-order">Objednat si termín</button>
      </Link>
      <video className="intro-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
