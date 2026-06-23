import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiFetch, apiPost } from '../utils/api'
import Breadcrumb from '../components/Breadcrumb'

function ArtisanDetail() {
  const { id } = useParams()
  const [artisan, setArtisan] = useState(null)

  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [objet, setObjet] = useState('')
  const [message, setMessage] = useState('')
  const [statutEnvoi, setStatutEnvoi] = useState(null)

  useEffect(() => {
    apiFetch(`/artisans/${id}`).then((data) => setArtisan(data))
  }, [id])

  const handleContact = async (e) => {
    e.preventDefault()

    try {
      await apiPost('/contact', { idArtisan: id, nom, email, objet, message })
      setStatutEnvoi('succes')
      setNom('')
      setEmail('')
      setObjet('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setStatutEnvoi('erreur')
    }
  }

  if (!artisan) {
    return <p className="container py-4">Chargement...</p>
  }

  return (
    <div className="container py-4">

      <Breadcrumb items={[
        { label: 'Recherche', to: '/recherche' },
        { label: artisan.nom }
      ]} />

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
            <span className="text-muted">Image à venir</span>
          </div>
        </div>

        <div className="col-12 col-md-8 ps-md-4">
          <h1>{artisan.nom}</h1>
          <p className="mb-1" style={{ color: '#e8930a' }}>★ {artisan.note}/5</p>
          <p className="mb-1">{artisan.Specialite?.nom}</p>
          <p className="text-muted">{artisan.ville}</p>
        </div>
      </div>

      <hr style={{ borderTop: '7px solid #cd2c2e', width: '40px', opacity: 1 }} className="mb-4" />

      <section className="mb-4">
        <h2>À propos</h2>
        <p>{artisan.a_propos}</p>

        {artisan.site_web && (
          <p>
            Site internet :{' '}
            <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
              {artisan.site_web}
            </a>
          </p>
        )}
      </section>

      <hr style={{ borderTop: '7px solid #cd2c2e', width: '40px', opacity: 1 }} className="mb-4" />

      <section>
        <h2 className="mb-3">Contact</h2>
        <form onSubmit={handleContact} className="row g-3" style={{ maxWidth: '600px' }}>
          <div className="col-12">
            <label htmlFor="nom" className="form-label">Nom *</label>
            <input id="nom" type="text" required value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">Email *</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          </div>

          <div className="col-12">
            <label htmlFor="objet" className="form-label">Objet *</label>
            <input id="objet" type="text" required value={objet} onChange={(e) => setObjet(e.target.value)} className="form-control" />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea id="message" required rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-danger">Envoyer</button>
          </div>

          {statutEnvoi === 'succes' && (
            <div className="col-12">
              <p className="text-success mb-0">Message envoyé avec succès !</p>
            </div>
          )}
          {statutEnvoi === 'erreur' && (
            <div className="col-12">
              <p className="text-danger mb-0">Une erreur est survenue, veuillez réessayer.</p>
            </div>
          )}
        </form>
      </section>
    </div>
  )
}

export default ArtisanDetail