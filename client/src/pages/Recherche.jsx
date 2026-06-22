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
    <div>
      <h1>Les artisans de ma région</h1>

      <form onSubmit={handleValider}>
        <input
          type="text"
          placeholder="Recherche par nom"
          value={nomInput}
          onChange={(e) => setNomInput(e.target.value)}
        />

        <select
          value={categorieInput}
          onChange={(e) => setCategorieInput(e.target.value)}
        >
          <option value="">Sélectionner</option>
          {categories.map((categorie) => (
            <option key={categorie.id_categorie} value={categorie.id_categorie}>
              {categorie.nom}
            </option>
          ))}
        </select>

        <button type="submit">Valider</button>
      </form>

      <div>
        {artisans.map((artisan) => (
          <Link key={artisan.id} to={`/artisan/${artisan.id}`}>
            <h3>{artisan.nom}</h3>
            <p>{artisan.note}/5</p>
            <p>{artisan.Specialite?.nom}</p>
            <p>{artisan.ville}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Recherche