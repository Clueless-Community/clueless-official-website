import React from 'react';
import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.screen.width < 1024) {
      setIsMobile(true);
    }
  }, []);

  const navigation = [
    { name: 'Home', href: '/#hero', current: router.pathname === '/' },
    {
      name: 'About Us',
      href: '/about-us',
      current: router.pathname === '/about-us',
    },
    {
      name: 'Open Source Projects',
      href: '/#projects',
      current: router.pathname === '/#projects',
    },
    {
      name: 'Resources',
      href: 'https://clueless-resources.super.site/resources',
      current: false,
    },
  ];

  const [nav, setNav] = useState(navigation);

  const setActive = (nameToSet: string) => {
    const updatedNav = nav.map((item) => ({
      ...item,
      current: item.name === nameToSet,
    }));

    setNav(updatedNav);
  };

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
                </div>
                <div className="w-[100%] flex justify-between items-center">
                  {/* Hero Logo */}
                  <Link href="/">
                    <div className="flex items-center cursor-pointer">
                      {ClueLogo('white')}
                      <div className="mt-1">
                        <h1 className="text-3xl ml-1">Clueless</h1>
                      </div>
                    </div>
                  </Link>
                  {/* Rest Part */}
                  <div className="hidden lg:flex items-center">
                    {/* Tabs */}
                    <div className="flex space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#7EE787]'
                              : 'text-gray-300 hover:text-[#7EE787]',
                            'rounded-md text-lg font-medium'
                          )}
                          onClick={() => setActive(item.name)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#559e5c] text-white font-black'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      onClick={() => setActive(item.name)}
                    >
                      {item.name}
                    </Link>
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
