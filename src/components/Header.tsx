import img from '../assets/img.jpg'
import { Link } from 'react-router-dom'  // ADD THIS IMPORT

export default function Header() {
    return (
        <>
        <div>Header </div>
        <header>
        <h1>Maria Boliti</h1>

  <nav>
                    <Link to="/">Home</Link>{' '}
                    <Link to="/entries">Entries</Link>{' '}
                    <Link to="/entries/new">New Entry</Link>{' '}
                    <Link to="/about">About</Link>
                </nav>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>

      
      </header>

      <section>
        <img className="fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 ..."
 
          src={img}
          alt="Maria profile"
          width={200}
        />
        </section>
</>
    )
}

