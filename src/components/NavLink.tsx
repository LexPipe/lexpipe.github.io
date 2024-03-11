import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary-600 transition-colors ease-in-out"
    >
      {children}
    </Link>
  )
}
