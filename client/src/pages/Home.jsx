import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../utils/api'

// Hook personnalisé : renvoie le nombre de cards à afficher selon la largeur d'écran
function useCardsParVue() {
  const [cardsParVue, setCardsParVue] = useState(3)

  useEffect(() => {
    const calculer = () => {
      if (window.innerWidth < 768) {
        setCardsParVue(1)
      } else if (window.innerWidth < 1200) {
        setCardsParVue(2)
      } else {
        setCardsParVue(3)
      }
    }

    calculer()
    window.addEventListener('resize', calculer)
    return () => window.removeEventListener('resize', calculer)
  }, [])

  return cardsParVue
}

function Home() {
  const etapes = [
    { numero: 1, texte: "Choisir la catégorie d'artisanat dans le menu." },
    { numero: 2, texte: "Choisir un artisan." },
    { numero: 3, texte: "Le contacter via le formulaire de contact." },
    { numero: 4, texte: "Une réponse sera apportée sous 48h." },
  ]

  const [topArtisans, setTopArtisans] = useState([])
  const [indexDepart, setIndexDepart] = useState(0)
  const cardsParVue = useCardsParVue()

  useEffect(() => {
    apiFetch('/artisans/top').then((data) => setTopArtisans(data))
  }, [])

  const reculer = () => {
    setIndexDepart((i) => (i - 1 < 0 ? topArtisans.length - cardsParVue : i - 1))
  }

  const avancer = () => {
    setIndexDepart((i) => (i + cardsParVue >= topArtisans.length ? 0 : i + 1))
  }

  const artisansVisibles = topArtisans.slice(indexDepart, indexDepart + cardsParVue)

  return (
    <div className="container py-4">
      <section className="mb-5">
        <h1 className="mb-4">Comment trouver mon artisan ?</h1>
        <ol className="list-unstyled">
          {etapes.map((etape) => (
            <li key={etape.numero} className="d-flex align-items-start gap-3 mb-3">
              <span className="badge bg-primary rounded-circle fs-4" style={{ minWidth: '2rem' }}>
                {etape.numero}
              </span>
              <span className="pt-1 fs-5">{etape.texte}</span>
            </li>
          ))}
        </ol>
      </section>

    <hr style={{ borderTop: '7px solid #82b864', width: '40px', opacity: 1 }} className="mb-4" />

      <section>
        <h2 className="mb-4">Les 3 artisans du mois</h2>

        <div className="d-flex align-items-center gap-2">
          <button
            onClick={reculer}
            aria-label="Artisan précédent"
            className="btn border-0 d-xl-none fs-1"
            style={{ color: '#82b864' }}
          >
            ‹
          </button>

          <div className="row g-3 flex-grow-1">
            {artisansVisibles.map((artisan) => (
              <div key={artisan.id_artisan} className={cardsParVue === 1 ? 'col-12' : cardsParVue === 2 ? 'col-6' : 'col-4'}>
                <Link
                  to={`/artisan/${artisan.id_artisan}`}
                  className="card h-100 text-decoration-none text-dark shadow-sm"
                  style={{ backgroundColor: '#f1f8fc' }}
                >
                  <div className="card-body text-center">
                    <h3 className="card-title h5">{artisan.nom}</h3>
                    <p className="mb-1" style={{ color: '#e8930a' }}>★ {artisan.note}/5</p>
                    <p className="mb-1">{artisan.Specialite?.nom}</p>
                    <p className="mb-0 text-muted">{artisan.ville}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={avancer}
            aria-label="Artisan suivant"
            className="btn border-0 d-xl-none fs-1"
            style={{ color: '#82b864' }}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home