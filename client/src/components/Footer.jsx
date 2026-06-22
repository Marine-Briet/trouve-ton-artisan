import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-wrap justify-content-between gap-4">
        <address className="mb-0">
          <strong>Lyon</strong><br />
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 LYON CEDEX 02<br />
          France<br />
          +33 (0)4 26 73 40 00
        </address>

        <nav className="d-flex flex-column gap-2">
          <Link to="/mentions-legales" className="text-light text-decoration-none">Mentions légales</Link>
          <Link to="/donnees-personnelles" className="text-light text-decoration-none">Données personnelles</Link>
          <Link to="/accessibilite" className="text-light text-decoration-none">Accessibilité</Link>
          <Link to="/cookies" className="text-light text-decoration-none">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer