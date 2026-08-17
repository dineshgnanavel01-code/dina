import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { FavoritesProvider } from './contexts/FavoritesContext'

export default function App() {
  return <FavoritesProvider><div className="min-h-screen"><Navbar/><AppRoutes/><Footer/></div></FavoritesProvider>
}
