import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

export default function Favorites() {
  const ids = JSON.parse(localStorage.getItem('flex-favorites') || '[]')
  const saved = properties.filter(property => ids.includes(property.id))
  return <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Your collection</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Favourite homes</h1><p className="mt-3 text-stone-500">Keep the places you love in one spot.</p>{saved.length ? <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{saved.map(p => <PropertyCard key={p.id} property={p}/>)}</div> : <div className="mt-10 rounded-2xl border border-dashed border-stone-300 p-12 text-center"><h2 className="text-xl font-bold">No favourites yet</h2><p className="mt-2 text-sm text-stone-500">Tap the heart on a property to save it here.</p><Link to="/properties" className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">Browse properties</Link></div>}</main>
}
