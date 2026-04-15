import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />
            <Link to="/">Go to home</Link>
            <Link to="/entries/new">New Entry</Link>{' '}

            <div>About page</div>
            <p>
          I am a passionate technology learner who recently discovered the world of software development. Since then, I have truly enjoyed learning React and building web applications. Each new concept I learn motivates me to keep growing and improving. I am excited to continue developing my skills and building a future in the technology industry.
        </p>

        </>
    )
}
