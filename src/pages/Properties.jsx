import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import FilterPanel from '../components/FilterPanel'
import SectionHeading from '../components/SectionHeading'
import { properties } from '../data/properties'

const empty = { location: '', type: '', minPrice: '', maxPrice: '', bedrooms: '', amenities: [] }

export default function Properties() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState({ ...empty, location: params.get('location') || '', type: params.get('type') || '', bedrooms: params.get('bedrooms') || '' })
  const [mobileFilters, setMobileFilters] = useState(false)
  const filtered = useMemo(() => properties.filter(p => (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) && (!filters.type || p.type === filters.type) && (!filters.minPrice || p.price >= Number(filters.minPrice)) && (!filters.maxPrice || p.price <= Number(filters.maxPrice)) && (!filters.bedrooms || p.bedrooms >= Number(filters.bedrooms)) && (!filters.amenities.length || filters.amenities.every(a => p.amenities.includes(a)))), [filters])
  const reset = () => setFilters(empty)
  return <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16"><SectionHeading eyebrow="Browse rentals" title="Find your next place" description="Explore homes across the UK and refine the list to match your needs."/><div className="mb-6 flex items-center justify-between md:hidden"><p className="text-sm text-stone-500">{filtered.length} homes found</p><button onClick={() => setMobileFilters(true)} className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold"><SlidersHorizontal size={16}/> Filters</button></div><div className="grid gap-8 lg:grid-cols-[270px_1fr]"><div className="hidden lg:block"><FilterPanel filters={filters} setFilters={setFilters} onReset={reset}/></div><div><div className="mb-5 hidden justify-between md:flex"><p className="text-sm text-stone-500">Showing <span className="font-semibold text-stone-800">{filtered.length}</span> homes</p><p className="text-sm text-stone-400">Updated regularly</p></div>{filtered.length ? <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{filtered.map(p => <PropertyCard key={p.id} property={p}/>)}</div> : <div className="rounded-2xl border border-dashed border-stone-300 p-12 text-center"><h3 className="text-xl font-bold">No homes found</h3><p className="mt-2 text-sm text-stone-500">Try changing your filters.</p><button onClick={reset} className="mt-5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white">Reset filters</button></div>}</div></div>{mobileFilters && <FilterPanel mobile filters={filters} setFilters={setFilters} onReset={reset} onClose={() => setMobileFilters(false)}/>}</main>
}
