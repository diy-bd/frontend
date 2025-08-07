'use client';
import { useState } from 'react';

export default function Features() {
  const [services, setServices] = useState([
    {
      title: 'E-commerce featured',
      features: [
        'Seamless platform integration (Shopify, WooCommerce, Magento)',
        'Real-time analytics dashboards for customer behavior and campaign performance',
        'Scalable ML models handling millions of SKUs',
        'GDPR/CCPA-compliant data pipelines',
        'Low-code customization for merchant tweaks',
      ],
      icon: (
        <svg
          className="mb-3 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
          <path
            fillOpacity=".48"
            d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
          />
        </svg>
      ),
    },
    {
      title: 'Value/ Lead based featured',

      features: [
        'Real-time data processing for rapid lead scoring',
        'Customizable workflows for industry-specific lead scoring',
        'Scalable data handling for mass campaigns',
        'Explainable AI for transparent lead scoring',
        'Multi-channel dashboards for unified lead performance views',
      ],
      icon: (
        <svg
          className="mb-3 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <path
            fillOpacity=".48"
            d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
          />
          <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
          <path
            d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
            opacity=".48"
          />
          <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
        </svg>
      ),
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
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                FEATURES
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Everything You Need to Grow
            </h2>
            <p className="text-lg text-indigo-200/65">
              All-in-One Tools to Transform Your Business
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <img
              className="max-w-none"
              src="/images/features.png"
              style={{ width: '1104px', height: '384px' }}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-1 sm:max-w-none sm:grid-cols-1 md:gap-x-2 md:gap-y-16 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={index}>
                <h3 className=" flex gap-4 mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  {service.icon}

                  {service.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-indigo-200/65">
                  {service.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
