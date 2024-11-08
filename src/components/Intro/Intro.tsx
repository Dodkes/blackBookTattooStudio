import profile from "../../assets/profile.jpg";
// import profile from "../../assets/profile2.jpg";

export default function Intro() {
  return (
    <div className="intro-container">
      <img src={profile} alt="profile" width={900} />
    </div>
  );
}
