import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Properties from '../pages/Properties'
import PropertyDetails from '../pages/PropertyDetails'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Favorites from '../pages/Favorites'
import NotFound from '../pages/NotFound'

export default function AppRoutes() { return <Routes><Route path="/" element={<Home/>}/><Route path="/properties" element={<Properties/>}/><Route path="/properties/:id" element={<PropertyDetails/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/auth" element={<Login/>}/><Route path="/favorites" element={<Favorites/>}/><Route path="*" element={<NotFound/>}/></Routes> }
