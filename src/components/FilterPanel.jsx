import { SlidersHorizontal, X } from 'lucide-react'
import { allAmenities } from '../data/properties'

export default function FilterPanel({ filters, setFilters, onReset, mobile = false, onClose }) {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const toggleAmenity = amenity => setFilters(prev => ({ ...prev, amenities: prev.amenities.includes(amenity) ? prev.amenities.filter(a => a !== amenity) : [...prev.amenities, amenity] }))
  return <aside className={mobile ? 'fixed inset-0 z-[60] overflow-y-auto bg-white p-6 md:hidden' : 'rounded-2xl border border-stone-200 bg-white p-5'}>
    <div className="mb-6 flex items-center justify-between"><div><p className="flex items-center gap-2 text-sm font-bold text-ink"><SlidersHorizontal size={17}/> Filters</p><p className="mt-1 text-xs text-stone-400">Refine your search</p></div>{mobile && <button onClick={onClose}><X/></button>}</div>
    <div className="space-y-6">
      <label className="block"><span className="mb-2 block text-sm font-semibold">Location</span><input value={filters.location} onChange={e => update('location', e.target.value)} placeholder="City or area" className="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-brand-500"/></label>
      <label className="block"><span className="mb-2 block text-sm font-semibold">Property type</span><select value={filters.type} onChange={e => update('type', e.target.value)} className="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm outline-none"><option value="">All types</option><option>Apartment</option><option>House</option><option>Loft</option><option>Studio</option></select></label>
      <div><span className="mb-2 block text-sm font-semibold">Price / month</span><div className="grid grid-cols-2 gap-2"><input type="number" value={filters.minPrice} onChange={e => update('minPrice', e.target.value)} placeholder="Min £" className="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm outline-none"/><input type="number" value={filters.maxPrice} onChange={e => update('maxPrice', e.target.value)} placeholder="Max £" className="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm outline-none"/></div></div>
      <label className="block"><span className="mb-2 block text-sm font-semibold">Bedrooms</span><select value={filters.bedrooms} onChange={e => update('bedrooms', e.target.value)} className="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm outline-none"><option value="">Any</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
      <div><span className="mb-3 block text-sm font-semibold">Amenities</span><div className="grid grid-cols-2 gap-2">{allAmenities.map(a => <label key={a} className="flex items-center gap-2 text-xs text-stone-600"><input type="checkbox" checked={filters.amenities.includes(a)} onChange={() => toggleAmenity(a)} className="accent-brand-600"/>{a}</label>)}</div></div>
    </div>
    <div className="mt-7 flex gap-2"><button onClick={onReset} className="flex-1 rounded-xl border border-stone-200 px-4 py-2.5 text-sm font-semibold">Reset</button>{mobile && <button onClick={onClose} className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">Apply</button>}</div>
  </aside>
}
