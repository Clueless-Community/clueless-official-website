/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 1024) {
      setIsMobile(true);
    }
  }, []);

  const navigation = [
    { name: 'Home', href: '/#hero', current: true },
    { name: 'Events', href: '/#events', current: false },
    { name: 'Open Source Projects', href: '#projects', current: false },
    {
      name: 'Resources',
      href: 'https://clueless-resources.super.site/resources',
      current: false,
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div className="pb-2 pt-2 sticky top-0 nav_gradient z-10 text-white xl:px-24 md:px-10 px-5">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="relative flex h-16">
                {/* Menu Icon for Mobile */}
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                  {/* Profile Image */}
                  <button className="flex rounded-full md:ml-4 text-sm hover:outline-none hover:ring-2 hover:ring-[#7EE787] hover:ring-offset-2 hover:ring-offset-gray-800">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1626657457446752257/d4kJWBeS_400x400.jpg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="w-[100%] flex justify-between items-center">
                  {/* Hero Logo */}
                  <Link href="/">
                    <div className="flex items-center cursor-pointer">
                      {ClueLogo('white')}
                      <div className="mt-1">
                        <h1 className="font-raleway text-3xl ml-1">Clueless</h1>
                      </div>
                    </div>
                  </Link>
                  {/* Rest Part */}
                  <div className="hidden lg:flex items-center">
                    {/* Tabs */}
                    <div className="flex space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#7EE787]'
                              : 'text-gray-300 hover:text-[#7EE787]',
                            'rounded-md text-lg font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    {/* Profile Image */}
                    <div className="absolute inset-y-0 right-0 flex items-center pl-5 md:static md:inset-auto md:ml-6 md:pr-0">
                      <button className="flex rounded-full text-sm hover:outline-none hover:ring-2 hover:ring-[#7EE787] hover:ring-offset-2 hover:ring-offset-gray-800">
                        <img
                          className="w-10 rounded-full"
                          src="https://pbs.twimg.com/profile_images/1626657457446752257/d4kJWBeS_400x400.jpg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#559e5c] text-white font-black'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

const ClueLogo = (color: string) => {
  return (
    <div style={{ margin: '2px' }}>
      <svg
        width="48"
        viewBox="0 0 65 60"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.8241 54.2932C37.8241 73.529 60.7067 25.0978 45.0366 0C30.6352 22.7929 65 75.0657 65 55.8298C65 36.594 -16.3085 19.4636 2.95127 19.4636C22.211 19.4636 37.8241 35.0573 37.8241 54.2932Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default NavBar;
