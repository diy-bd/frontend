'use client';
import { useRef, useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react';

export default function Services() {
  const [pause, setPause] = useState(false);
  const animationRef = useRef<number>(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 12 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  // Smooth scroll via requestAnimationFrame
  const animate = () => {
    const slider = instanceRef.current;
    if (!slider || pause) return;

    const track = slider.track;
    const current = track.details.position;
    track.to(current + 0.002); // <- This is the correct method
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [pause]);

  const services = [
    {
      title: 'Digital Marketing Strategy',
      description:
        'AI-powered campaigns tailored for startups to enterprises, focused on performance and conversion.',
      img: '/images/workflow-01.png',
    },
    {
      title: 'AI Marketing Automation',
      description:
        'Streamline customer engagement and funnel management with intelligent automation.',
      img: '/images/workflow-02.png',
    },
    {
      title: 'CRM Implementation & Optimization',
      description:
        'Boost your CRM workflows with custom integration and smart automation.',
      img: '/images/workflow-03.png',
    },
    {
      title: 'Ethical Brand Consulting',
      description:
        'Build trust through ethical, sustainable brand strategies that convert.',
      img: '/images/workflow-01.png',
    },
    {
      title: 'E-commerce Growth Solutions',
      description:
        'Drive sales with inbound marketing, personalization, and conversion rate optimization.',
      img: '/images/workflow-02.png',
    },
  ];

  return (
    <section className="relative" id="services">
      {/* Background */}
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <div className="inline-flex items-center gap-3 pb-3">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </div>
              <h2 className="bg-gradient-to-r from-gray-200 to-indigo-300 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
                Empowering Growth Through Smart Digital Services
              </h2>
              <p className="text-lg text-indigo-200/65 mt-4">
                Explore our AI-driven solutions designed to optimize marketing,
                automation, CRM, and brand success—tailored for the modern
                business.
              </p>
            </div>

            {/* Slider */}
            <div
              ref={sliderRef}
              onMouseEnter={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
              className="keen-slider"
            >
              {services.map((service, index) => (
                <div className="keen-slider__slide" key={index}>
                  <div className="h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
                    <div className="relative h-full overflow-hidden rounded-[inherit] bg-gray-950">
                      <img
                        className="w-full"
                        src={service.img}
                        alt={service.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="p-6">
                        <h3 className="text-indigo-300 font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-indigo-200/65 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
