export default function Button({ children, className = '', variant = 'primary', ...props }) {
  const styles = variant === 'secondary'
    ? 'border border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
    : variant === 'light'
      ? 'bg-white text-brand-700 hover:bg-brand-50'
      : 'bg-brand-600 text-white hover:bg-brand-700'

  return <button className={`rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`} {...props}>{children}</button>
}
