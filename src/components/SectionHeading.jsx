export default function SectionHeading({ eyebrow, title, description, action }) {
  return <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>{description && <p className="mt-3 text-stone-500">{description}</p>}</div>{action}</div>
}
