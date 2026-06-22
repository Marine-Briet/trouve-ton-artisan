import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiFetch } from '../utils/api'

function Header() {
  const [categories, setCategories] = useState([])
  const [recherche, setRecherche] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    apiFetch('/categories').then((data) => setCategories(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/recherche?nom=${recherche}`)
  }

  return (
    <header className="bg-light shadow-sm">
      <div className="container d-flex flex-wrap align-items-center justify-content-between py-2 gap-2">
        <Link to="/" className="navbar-brand fw-bold fs-5 text-dark text-decoration-none">
          Trouve ton artisan !
        </Link>

        <nav className="d-none d-md-flex gap-3">
          {categories.map((categorie) => (
            <Link
              key={categorie.id_categorie}
              to={`/recherche?categorie=${categorie.id_categorie}`}
              className="text-dark text-decoration-none"
            >
              {categorie.nom}
            </Link>
          ))}
        </nav>

        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="form-control"
            aria-label="Rechercher un artisan"
          />
          <button type="submit" className="btn btn-primary">
            Rechercher
          </button>
        </form>
      </div>

      {/* Menu mobile simple, affiché sous la barre sur petit écran */}
      <nav className="d-flex d-md-none flex-wrap gap-3 container pb-2">
        {categories.map((categorie) => (
          <Link
            key={categorie.id_categorie}
            to={`/recherche?categorie=${categorie.id_categorie}`}
            className="text-dark text-decoration-none small"
          >
            {categorie.nom}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header