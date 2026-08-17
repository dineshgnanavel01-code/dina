import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/Auth'

function NotFound() { return <main className="mx-auto max-w-3xl px-5 py-24 text-center"><p className="text-sm font-bold uppercase tracking-widest text-brand-600">404</p><h1 className="mt-2 text-4xl font-bold">That page moved.</h1><a href="/" className="mt-6 inline-block rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">Back home</a></main> }

export default function App() { return <div className="min-h-screen"><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/properties" element={<Properties/>}/><Route path="/properties/:id" element={<PropertyDetails/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/auth" element={<Auth/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></div> }
