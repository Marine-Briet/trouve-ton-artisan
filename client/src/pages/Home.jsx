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
    <div className="container py-4">
      <section className="mb-5">
        <h1 className="mb-4">Comment trouver mon artisan ?</h1>
        <ol className="list-unstyled">
          {etapes.map((etape) => (
            <li key={etape.numero} className="d-flex align-items-start gap-3 mb-3">
              <span className="badge bg-primary rounded-circle fs-6 p-2" style={{ minWidth: '2rem' }}>
                {etape.numero}
              </span>
              <span className="pt-1">{etape.texte}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-4">Les 3 artisans du mois</h2>
        <div className="row g-3">
          {topArtisans.map((artisan) => (
            <div key={artisan.id_artisan} className="col-12 col-md-4">
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
      </section>
    </div>
  )
}

export default Home