import video from "../../assets/video.mp4";

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-heading">Profesionální tetovací studio v Čechách</h1>
      <video className="intro-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
