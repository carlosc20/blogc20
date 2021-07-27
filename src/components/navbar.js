import * as React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {

  var pathname = window.location.pathname

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed h-16 inset-x-0 top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* PC nav buttons */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {props.navigation.map((item) => (
                        <Link 
                            key={item.name}
                            to={item.href} 
                            className={classNames(
                                  item.href === pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                            aria-current={item.href === pathname ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Social media links */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://github.com/carlosc20" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white">
                  <span className="sr-only">Github</span>
                  <FontAwesomeIcon size="lg" icon={faGithub} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/carlos-castro-b3a81a214/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white">
                  <span className="sr-only">Linked In</span>
                  <FontAwesomeIcon size="lg" icon={faLinkedin} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile nav buttons */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
              {props.navigation.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className={classNames(
                          item.href === pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                    aria-current={item.href === pathname ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}