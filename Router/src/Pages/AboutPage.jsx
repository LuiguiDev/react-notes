import { Link } from "../Components/Link";

export default function AboutPage () {
  return (
    <>
      <h2>About the autor:</h2>
      <div className="info">
        <img src="https://pbs.twimg.com/profile_images/1627866404698394625/Qf9ZE1vq_400x400.jpg" alt="Luigui's picture" />
        <p>Luis Rodríguez is a frontend developer currently learning react, node and andanced javascript, also he is learning some libraries such as three.js </p>
        <Link to={'/'} >Back to home</Link>
      </div>
    </>
  )
}
