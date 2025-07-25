'use client';
import { useState } from 'react';

export default function AboutUs() {
  const [mission, setMission] = useState({
    title: 'Our Mission',
    description:
      'Agent DiY empowers businesses with ethical, high-impact digital solutions that drive sustainable growth across all sectors. We deliver AI-powered marketing automation and CRM tools designed to level the playing field, ensuring every business— regardless of size—can compete fairly and achieve meaningful success in the digital marketplace.',
    image: '/images/mission.webp',
  });

  const [vision, setVision] = useState({
    title: 'Our Vision',
    description:
      'Agent DiY envisions a future where every business thrives equitably through innovative, trustworthy technology. We see a digital commerce ecosystem where AI tools eliminate unfair advantages, creating fair opportunities for all brands to build trusted, high-impact businesses with integrity and innovation—from Dhaka to the world.',
    image: '/images/vision.webp',
  });

  return (
    <section className="" id="about">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center my-[20vh]">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
              {mission.title}
            </h1>
            <p className="mt-4 text-gray-300">{mission.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={mission.image}
            alt="apple watch photo"
          />
        </div>
      </div>

      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center my-[20vh]">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={vision.image}
            alt="apple watch photo"
          />
        </div>

        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
              {vision.title}
            </h1>
            <p className="mt-4 text-gray-300">{vision.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
