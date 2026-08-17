import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PropertyCard from './PropertyCard'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  return <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mb-10 flex items-end justify-between gap-5"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Featured homes</p><h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Places worth coming home to</h2></div><Link to="/properties" className="hidden items-center gap-2 text-sm font-bold text-brand-600 sm:flex">View all homes <ArrowRight size={16}/></Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{properties.filter(p => p.featured).slice(0, 6).map(p => <PropertyCard key={p.id} property={p}/>)}</div></section>
}
