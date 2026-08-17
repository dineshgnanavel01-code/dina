import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('flex-favorites') || '[]'))
  useEffect(() => localStorage.setItem('flex-favorites', JSON.stringify(favorites)), [favorites])
  const toggleFavorite = id => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  const value = useMemo(() => ({ favorites, toggleFavorite, isFavorite: id => favorites.includes(id) }), [favorites])
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside FavoritesProvider')
  return context
}
