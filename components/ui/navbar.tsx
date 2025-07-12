'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar-animated fixed top-0 left-0 right-0 z-50 bg-gray-950 text-white"
      style={{
        maxWidth: scrolled ? '1280px' : '100vw',
        margin: scrolled ? '0 auto' : '0',
        borderRadius: scrolled ? '0.75rem' : '0',
        boxShadow: scrolled ? '0 4px 24px 0 rgba(0,0,0,0.15)' : 'none',
        border: scrolled ? '1px solid #1f2937' : 'none',
        paddingLeft: scrolled ? '1rem' : '0',
        paddingRight: scrolled ? '1rem' : '0',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        transform: scrolled ? 'translateY(12px)' : 'translateY(0)',
      }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="/"
          className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Agent DiY
        </a>
        <div className="hidden lg:block">
          <nav className="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-blue-gray-700 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                ABOUT
              </button>
            </a>
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                SERVICES
              </button>
            </a>
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                FEATURES
              </button>
            </a>
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                PRICING
              </button>
            </a>
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                SUCCESS STORIES
              </button>
            </a>
            <a
              href="#"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r2:"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-normal outline-none focus:outline-none"
            >
              <button
                role="menuitem"
                className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
              >
                CONTACT
              </button>
            </a>
          </nav>
        </div>

        <div className="hidden gap-2 lg:flex">
          <a href="/astro-launch-ui/signup">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-dark text-white"
              type="button"
            >
              GET STARTED
            </button>
          </a>
        </div>
        <button
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 lg:hidden"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="block w-full basis-full overflow-hidden">
        <nav className="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-blue-gray-700 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"></nav>
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <a href="/">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-dark text-white block w-full"
              type="button"
            >
              GET STARTED
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
