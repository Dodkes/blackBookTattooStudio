import video from "../../assets/video.mp4";

export default function Intro() {
  const body = {
    name: "John",
  };

  const handleOrder = async () => {
    const response = await fetch("http://localhost:8080/send-order", {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="intro-container">
      <h1 className="intro-heading">Profesionální tetovací studio v Čechách</h1>
      <button onClick={handleOrder}>Order</button>
      <video className="intro-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
