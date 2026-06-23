import { Construction } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { useSeo } from '../hooks/useSeo'

function PageLegale({ titre }) {
  useSeo(`${titre} - Trouve ton artisan !`, `Page ${titre} du site Trouve ton artisan.`)
  
  return (
    <div className="container py-5 text-center">
      <Breadcrumb items={[{ label: titre }]} />

      <h1 className="mb-4">{titre}</h1>
      <Construction size={80} color="#384050" className="mb-4" />
      <p className="fs-3">Cette page est en construction</p>
    </div>
  )
}

export default PageLegale