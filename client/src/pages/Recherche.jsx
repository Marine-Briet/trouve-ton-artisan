import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { apiFetch } from '../utils/api'

function Recherche() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [artisans, setArtisans] = useState([])
  const [categories, setCategories] = useState([])

  const [nomInput, setNomInput] = useState('')
  const [categorieInput, setCategorieInput] = useState('')

  const nomUrl = searchParams.get('nom')
  const categorieUrl = searchParams.get('categorie')

  useEffect(() => {
    apiFetch('/categories').then((data) => setCategories(data))
  }, [])

  useEffect(() => {
    let endpoint = '/artisans'

    if (categorieUrl) {
      endpoint = `/categories/${categorieUrl}/artisans`
    } else if (nomUrl) {
      endpoint = `/artisans/search?nom=${nomUrl}`
    }

    apiFetch(endpoint).then((data) => {
      let resultats = data

      if (categorieUrl && nomUrl) {
        resultats = data.filter((artisan) =>
          artisan.nom.toLowerCase().includes(nomUrl.toLowerCase())
        )
      }

      setArtisans(resultats)
    })
  }, [nomUrl, categorieUrl])

  const handleValider = (e) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (nomInput) params.set('nom', nomInput)
    if (categorieInput) params.set('categorie', categorieInput)

    navigate(`/recherche?${params.toString()}`)
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Les artisans de ma région</h1>

      <form onSubmit={handleValider} className="bg-light p-3 rounded mb-4 row g-3 align-items-end">
        <div className="col-12 col-md-5">
          <label htmlFor="nomInput" className="form-label">Recherche par nom</label>
          <input
            id="nomInput"
            type="text"
            placeholder="Nom de l'artisan"
            value={nomInput}
            onChange={(e) => setNomInput(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="col-12 col-md-5">
          <label htmlFor="categorieInput" className="form-label">Recherche par catégorie</label>
          <select
            id="categorieInput"
            value={categorieInput}
            onChange={(e) => setCategorieInput(e.target.value)}
            className="form-select"
          >
            <option value="">Sélectionner</option>
            {categories.map((categorie) => (
              <option key={categorie.id_categorie} value={categorie.id_categorie}>
                {categorie.nom}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-2">
          <button type="submit" className="btn btn-primary w-100">Valider</button>
        </div>
      </form>

      <div className="row g-3">
        {artisans.map((artisan) => (
          <div key={artisan.id_artisan} className="col-12 col-md-6 col-lg-4">
            <Link
              to={`/artisan/${artisan.id_artisan}`}
              className="card h-100 text-decoration-none text-dark shadow-sm"
            >
              <div className="card-body">
                <h3 className="card-title h5">{artisan.nom}</h3>
                <p className="mb-1 text-warning">★ {artisan.note}/5</p>
                <p className="mb-1">{artisan.Specialite?.nom}</p>
                <p className="mb-0 text-muted">{artisan.ville}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recherche