import { browse, Link } from '../Link';

export default function HomePage () {
  return (
    <>
      <h2>React router</h2>
      <p>This is a practice where we will build a react router right from the start</p>
      <Link to={'/about'}>Read about the autor</Link>
    </>
  )
}
