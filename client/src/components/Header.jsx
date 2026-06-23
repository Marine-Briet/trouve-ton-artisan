import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiFetch } from '../utils/api'
import { Search } from 'lucide-react'

function Header() {
  const [categories, setCategories] = useState([])
  const [recherche, setRecherche] = useState('')
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [rechercheOuverte, setRechercheOuverte] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    apiFetch('/categories').then((data) => setCategories(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/recherche?nom=${recherche}`)
    setRechercheOuverte(false)
  }

  return (
    <header className="bg-light shadow-sm position-relative">
      <div className="container py-1 d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <img src="/src/assets/logo.png" alt="Trouve ton artisan" style={{ height: '50px', width: 'auto', maxWidth: '100%' }} />
        </Link>

        {/* Boutons mobile/tablette : loupe + burger (jusqu'à xl) */}
        <div className="d-flex d-xl-none gap-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => setRechercheOuverte(true)}
            aria-label="Ouvrir la recherche"
          >
            <Search size={20} />
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setMenuOuvert(true)}
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>
        </div>

        {/* Desktop (xl et +) : recherche visible directement */}
        <form onSubmit={handleSubmit} className="d-none d-xl-flex gap-2">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="form-control"
            aria-label="Rechercher un artisan"
          />
          <button type="submit" className="btn btn-primary">Rechercher</button>
        </form>
      </div>

      {/* Desktop (xl et +) : menu catégories sous la barre de recherche */}
      <nav className="d-none d-xl-flex justify-content-end gap-4 container pb-2">
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

      {/* Panneau plein écran : MENU (mobile + tablette, jusqu'à xl) */}
      {menuOuvert && (
        <div
          className="position-fixed top-0 end-0 bg-light p-4"
          style={{ width: '100%', height: '100vh', zIndex: 1050 }}
        >
          <div className="d-flex justify-content-end mb-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setMenuOuvert(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>

          <nav className="d-flex flex-column gap-4 fs-4">
            {categories.map((categorie) => (
              <Link
                key={categorie.id_categorie}
                to={`/recherche?categorie=${categorie.id_categorie}`}
                className="text-dark text-decoration-none"
                onClick={() => setMenuOuvert(false)}
              >
                {categorie.nom}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Panneau plein écran : RECHERCHE (mobile + tablette, jusqu'à xl) */}
      {rechercheOuverte && (
        <div
          className="position-fixed top-0 end-0 bg-light p-4"
          style={{ width: '100%', height: '100vh', zIndex: 1050 }}
        >
          <div className="d-flex justify-content-end mb-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setRechercheOuverte(false)}
              aria-label="Fermer la recherche"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="form-control form-control-lg"
              aria-label="Rechercher un artisan"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">Rechercher</button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Header