import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <img
        src="/src/assets/404.jpg"
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