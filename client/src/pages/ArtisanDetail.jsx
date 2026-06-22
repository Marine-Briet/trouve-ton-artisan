import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiFetch, apiPost } from '../utils/api'

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
      await apiPost('/contact', {
        idArtisan: id,
        nom,
        email,
        objet,
        message,
      })
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
    return <p>Chargement...</p>
  }

  return (
    <div>
      <h1>{artisan.nom}</h1>
      <p>{artisan.Specialite?.nom}</p>
      <p>{artisan.note}/5</p>
      <p>{artisan.ville}</p>

      <h2>À propos</h2>
      <p>{artisan.a_propos}</p>

      {artisan.site_web && (
        <p>
          Site internet : <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">{artisan.site_web}</a>
        </p>
      )}

      <h2>Contact</h2>
      <form onSubmit={handleContact}>
        <label htmlFor="nom">Nom *</label>
        <input
          id="nom"
          type="text"
          required
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="objet">Objet *</label>
        <input
          id="objet"
          type="text"
          required
          value={objet}
          onChange={(e) => setObjet(e.target.value)}
        />

        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Envoyer</button>
      </form>

      {statutEnvoi === 'succes' && <p>Message envoyé avec succès !</p>}
      {statutEnvoi === 'erreur' && <p>Une erreur est survenue, veuillez réessayer.</p>}
    </div>
  )
}

export default ArtisanDetail