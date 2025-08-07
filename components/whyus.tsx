'use client';
import { useState } from 'react';

export default function WhyUs() {
  const [WhyUs, setWhyUs] = useState([
    {
      title: 'Empowering All Businesses',
      description:
        'Whether you’re a bold startup or an established brand, get the tech advantage.Deep local knowledge, global best practices.International-quality services delivered with intimate knowledge of local market dynamics and cultural nuances.',
    },
    {
      title: 'All-in-one platform',
      description:
        'Seamlessly manage digital marketing, sales, and brand building. End-to-end digital transformation covering everything from intelligent automation to ethical brand development and sustainable growth strategies.',
    },
    {
      title: 'AI at Your Fingertips',
      description:
        'Future-proof tech for every business, big or small.Cutting-edge AI and automation tools that keep your business ahead of the competition while maintaining ethical business practices. Transform how you work, market, sell, and grow—automatically.',
    },
    {
      title: 'Ethical, Reliable, Transparent',
      description:
        "Success that’s sustainable and responsible. Specialized expertise in AI-driven solutions with deep understanding of Bangladesh's unique digital landscape and global SME requirements.",
    },
    {
      title: 'Partnership Approach',
      description:
        "We don't just provide services; we become your strategic partner in digital transformation, growing alongside your business success.",
    },
  ]);
  return (
    <section className="relative" id="features">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src="/images/blurred-shape-gray.svg"
          style={{ width: '760px', height: '668px' }}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src="/images/blurred-shape.svg"
          style={{ width: '760px', height: '668px' }}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl font-bold">
                Why US
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            {WhyUs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl  shadow-lg p-6 border border-indigo-200/65 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold  text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-indigo-200/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
