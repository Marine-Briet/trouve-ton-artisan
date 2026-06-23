import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo'
import image404 from '../assets/404.jpg'

function NotFound() {
  useSeo('Page non trouvée - Trouve ton artisan !', "Cette page n'existe pas.")
  
  return (
    <div className="container py-5 text-center">
      <img
        src={image404}
        alt="Page introuvable"
        style={{ maxWidth: '350px' }}
        className="mb-4"
      />
      <h1 className="display-4 fw-bold text-primary mb-3">OUPS !</h1>
      <p className="fs-5">La page que vous cherchez semble introuvable...</p>
      <p className="text-muted mb-4">Code d'erreur : 404</p>
      <Link to="/" className="btn btn-primary">
        Revenir à la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound