import { Search, MapPin, Home, BedDouble, CalendarDays } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SearchPanel({ compact = false }) {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [date, setDate] = useState('')
  const submit = (e) => { e.preventDefault(); navigate(`/properties?location=${encodeURIComponent(location)}&type=${encodeURIComponent(type)}&bedrooms=${encodeURIComponent(bedrooms)}`) }
  return <form onSubmit={submit} className={`grid gap-2 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl shadow-stone-900/5 ${compact ? 'md:grid-cols-5' : 'md:grid-cols-5'}`}>
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-stone-50"><MapPin size={18} className="shrink-0 text-brand-600"/><span className="flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Location</span><input value={location} onChange={e => setLocation(e.target.value)} placeholder="Where to?" className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-stone-500"/></span></label>
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-stone-50"><Home size={18} className="shrink-0 text-brand-600"/><span className="flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Property type</span><select value={type} onChange={e => setType(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none"><option value="">Any type</option><option>Apartment</option><option>House</option><option>Loft</option><option>Studio</option></select></span></label>
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-stone-50"><BedDouble size={18} className="shrink-0 text-brand-600"/><span className="flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Bedrooms</span><select value={bedrooms} onChange={e => setBedrooms(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none"><option value="">Any</option><option value="1">1 bedroom</option><option value="2">2 bedrooms</option><option value="3">3 bedrooms</option><option value="4">4+ bedrooms</option></select></span></label>
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-stone-50"><CalendarDays size={18} className="shrink-0 text-brand-600"/><span className="flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Move in</span><input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none"/></span></label>
    <button className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 font-semibold text-white transition hover:bg-brand-700"><Search size={19}/> Search</button>
  </form>
}
