export function mergeClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function getNavigationItems(pathname: string | null) {
    if (!pathname) return []
    return [
      { name: 'Home', href: '#', current: pathname === '/' },
      { name: 'Services', href: '#services', current: pathname === '/services' },
      { name: 'About', href: '#about', current: pathname === '/about' },
      { name: 'Clients', href: '#clients', current: pathname === '/clients'},
      { name: 'Contact', href: '#contact', current: pathname === '/contact' },
    ]
  }