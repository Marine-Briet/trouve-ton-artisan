import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'ariane" className="mb-3">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">Accueil</Link>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {item.to ? (
              <Link to={item.to} className="text-decoration-none">{item.label}</Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb