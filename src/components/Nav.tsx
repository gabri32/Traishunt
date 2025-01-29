import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react"


const navigation = [
  { name: 'ROADMAP', to: '#roadmap'},
  { name: 'PREVENTA', to: '#presale' },
  { name: 'FAQ', to: '#faq' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Component: React.FC = () => {
  const [ current, setCurrent ] = useState(window.location.pathname)
  return (
    <div className="fixed w-full z-50 font-light">
      <Disclosure as="nav" className="bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        {({ open }) => (
          <>
            <div className="container mx-auto px-1 lg:px-16">
              <div className="relative flex h-16 lg:h-20 xl:py-11 items-center justify-between gap-5">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-lg p-2 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="hidden sm:block">
                    <div className="flex gap-11">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.to}
                          onClick={ () => setCurrent(item.to) }
                          className={classNames(
                            (current == item.to)  ? 'text-white underline underline-offset-8' : 'text-white hover:underline underline-offset-8',
                            'text-sm'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3 sm:gap-5">
                  <a 
                    href="#presale"
                    onClick={ () => setCurrent('/auth')}
                    className={classNames(
                      (current == '/auth')  ? ' text-white bg-zinc-900' : ' bg-white/15 text-white hover:bg-black',
                      'rounded-xl px-7 py-3 text-sm'
                    )}
                  >
                    Iniciar sesión
                  </a>
                  <a
                    href="#presale"
                    className={classNames(
                      (current == '/register')  ? 'text-white bg-black' : ' bg-main hover:bg-black hover:text-white',
                      'rounded-xl px-7 py-3 text-sm'
                    )}
                    onClick={ () => setCurrent('/register')}
                  >
                    Regístrate
                  </a>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={ () => setCurrent(item.to) }
                    href={item.to}
                    className={classNames(
                    (current == item.to) ? 'text-white underline underline-offset-8' : 'text-white hover:underline underline-offset-8',
                      'block px-3 py-2 text-sm'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
    
  )
}

export default Component