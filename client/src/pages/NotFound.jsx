import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>OUPS !</h1>
      <p>La page que vous cherchez semble introuvable...</p>
      <p>Code d'erreur : 404</p>
      <Link to="/">Revenir à la page d'accueil</Link>
    </div>
  )
}

export default NotFound