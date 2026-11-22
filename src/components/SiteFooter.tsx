import { Link } from 'react-router-dom'
import { glideToTop, useFitText } from '../motion/motion'
import '../styles/footer.css'

const REPO = 'https://github.com/theebuka/ng-figures'
const AUTHOR = 'https://theebuka.com'
const YEAR = new Date().getFullYear()

/** The closing band on every page: the title set full width, what the site is for, links and the credit line. */
export function SiteFooter() {
  const mark = useFitText<HTMLDivElement>()

  return (
    <footer className="foot">
      <div className="foot__mark display" ref={mark}>
        <span data-fit>Makers of Nigeria</span>
      </div>

      <div className="foot__body">
        <p className="foot__about">
          An illustrated history of fourteen people who shaped Nigeria, from the 1800s to today. Each page sets out
          what one person did and where, with the sources used and books to read next.
        </p>
        <nav aria-label="Footer">
          <ul className="foot__links mono">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
            <li>
              <a href={REPO} target="_blank" rel="noreferrer">
                Source
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="foot__base mono">
        <p>
          © {YEAR}{' '}
          <a href={AUTHOR} target="_blank" rel="noreferrer">
            Chukwuebuka Nwaju
          </a>
        </p>
        <button type="button" className="foot__top" onClick={glideToTop}>
          Back to top
        </button>
      </div>
    </footer>
  )
}
