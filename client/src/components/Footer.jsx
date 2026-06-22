import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <address>
        Lyon<br />
        101 cours Charlemagne<br />
        CS 20033<br />
        69269 LYON CEDEX 02<br />
        France<br />
        +33 (0)4 26 73 40 00
      </address>

      <nav>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/donnees-personnelles">Données personnelles</Link>
        <Link to="/accessibilite">Accessibilité</Link>
        <Link to="/cookies">Cookies</Link>
      </nav>
    </footer>
  )
}

export default Footer