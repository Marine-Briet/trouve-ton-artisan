import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../utils/api'

function Home() {
  const etapes = [
    { numero: 1, texte: "Choisir la catégorie d'artisanat dans le menu." },
    { numero: 2, texte: "Choisir un artisan." },
    { numero: 3, texte: "Le contacter via le formulaire de contact." },
    { numero: 4, texte: "Une réponse sera apportée sous 48h." },
  ]

  const [topArtisans, setTopArtisans] = useState([])

  useEffect(() => {
    apiFetch('/artisans/top').then((data) => setTopArtisans(data))
  }, [])

  return (
    <div>
      <h1>Comment trouver mon artisan ?</h1>
      <ol>
        {etapes.map((etape) => (
          <li key={etape.numero}>{etape.texte}</li>
        ))}
      </ol>

      <h2>Les 3 artisans du mois</h2>
      <div>
        {topArtisans.map((artisan) => (
          <Link key={artisan.id_artisan} to={`/artisan/${artisan.id_artisan}`}>
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

export default Home