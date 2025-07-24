'use client';
import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [aboutUsData, setAboutUsData] = useState([
    {
      title: 'Our Mission',
      description:
        'Agent DiY empowers businesses with ethical, high-impact digital solutions that drive sustainable growth across all sectors. We deliver AI-powered marketing automation and CRM tools designed to level the playing field, ensuring every business— regardless of size—can compete fairly and achieve meaningful success in the digital marketplace.',
      image: '/images/mission.webp',
    },
    {
      title: 'Our Vision',
      description:
        'Agent DiY envisions a future where every business thrives equitably through innovative, trustworthy technology. We see a digital commerce ecosystem where AI tools eliminate unfair advantages, creating fair opportunities for all brands to build trusted, high-impact businesses with integrity and innovation—from Dhaka to the world.',
      image: '/images/vision.webp',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % aboutUsData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [aboutUsData.length]);

  return (
    <section className="" id="about">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center my-[20vh]">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {aboutUsData.map((item, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none ${
                  activeTab === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
              ></button>
            ))}
          </div>

          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
              {aboutUsData[activeTab].title}
            </h1>
            <p className="mt-4 text-gray-300">
              {aboutUsData[activeTab].description}
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={aboutUsData[activeTab].image}
            alt="apple watch photo"
          />
        </div>
      </div>
    </section>
  );
}
