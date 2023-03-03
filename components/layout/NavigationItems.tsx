import { Fragment } from 'react'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getNavigationItems, mergeClassNames } from '../../util/helper'

type Props = {
  classes: string
}

export default function NavigationItems({ classes }: Props): JSX.Element {
  const pathname = usePathname()

  const navigation = getNavigationItems(pathname)

  return (
    <Fragment>
      {navigation.map((item) => (
        <li key={item.name}>
          <a href={item.href} aria-current={item.current ? 'page' : undefined}>
            <Disclosure.Button
              className={mergeClassNames(
                item.current
                  ? 'bg-gray-100 dark:bg-gray-600'
                  : 'bg-gray-50 dark:bg-gray-900',
                'text-small flex items-center rounded-md font-medium',
                'text-gray-700 hover:text-gray-600 dark:text-zinc-50 dark:hover:text-zinc-50',
                classes,
                'h-full w-full px-3 py-2 text-left',
              )}
            >
              {item.name}
            </Disclosure.Button>
          </a>
        </li>
      ))}
    </Fragment>
  )
}
