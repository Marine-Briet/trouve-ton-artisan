import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Recherche from './pages/Recherche'
import ArtisanDetail from './pages/ArtisanDetail'
import PageLegale from './pages/PageLegale'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'recherche', element: <Recherche /> },
      { path: 'artisan/:id', element: <ArtisanDetail /> },
      { path: 'mentions-legales', element: <PageLegale titre="Mentions légales" /> },
      { path: 'donnees-personnelles', element: <PageLegale titre="Données personnelles" /> },
      { path: 'accessibilite', element: <PageLegale titre="Accessibilité" /> },
      { path: 'cookies', element: <PageLegale titre="Cookies" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router