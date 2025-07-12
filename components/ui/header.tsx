'use client';

import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header className="h-screen min-h-screen w-screen bg-white">
      <div
        className="relative h-screen flex align-center flex-col justify-center text-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2664&amp;q=80")',
        }}
      >
        <h1 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-tight text-white mb-4 !leading-tight lg:text-7xl z-20">
          Empowering Businesses with AI-Driven Solutions
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10">
          We specialize in empowering businesses of all sizes from ambitious
          startups to established enterprises with cutting-edge digital
          marketing strategies, intelligent automation tools, and ethical brand
          consulting services.
        </p>
        <div className="w-auto mx-auto">
          <div className="flex items-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-dark text-white w-full z-10"
              type="button"
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
