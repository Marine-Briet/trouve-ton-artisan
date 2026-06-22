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
    <header>
      <Link to="/">Trouve ton artisan !</Link>

      <nav>
        {categories.map((categorie) => (
          <Link key={categorie.id} to={`/recherche?categorie=${categorie.id}`}>
            {categorie.nom}
          </Link>
        ))}
      </nav>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher un artisan..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  )
}

export default Header