'use client';
import { useState } from 'react';

const MinusIcon = () => {
  return (
    <svg
      className="flex-shrink-0 w-6 h-6 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="M20 12H4"
      ></path>
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-6 h-6 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

export default function Faq() {
  const handleFaqClick = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs.forEach((faq, i) => {
      if (i === index) {
        faq.active = !faq.active;
      } else {
        faq.active = false;
      }
    });
    setFaqs(newFaqs);
  };

  const [faqs, setFaqs] = useState([
    {
      question: 'What services does Agent DiY offer?',
      answer:
        'We specialize in AI-powered digital marketing strategies, intelligent marketing automation, CRM implementation, and ethical brand consulting tailored to businesses of all sizes—from startups to enterprises.',
      active: true,
    },
    {
      question: 'How can AI improve my business’s digital marketing?',
      answer:
        'AI enables data-driven insights, personalized customer journeys, automation of repetitive tasks, and optimized campaign performance, leading to higher ROI and sustainable growth.',
      active: false,
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        'Yes, our mission is to democratize digital success by providing scalable, ethical AI solutions accessible to businesses regardless of size or industry.',
      active: false,
    },
    {
      question: 'What is marketing automation, and how does it help?',
      answer:
        'Marketing automation uses AI tools to streamline customer engagement, lead nurturing, and campaign management, saving time while improving targeting and conversion rates.',
      active: false,
    },
    {
      question: 'How does your CRM implementation benefit my business?',
      answer:
        'Our CRM solutions centralize customer data, automate communication, and provide actionable insights to enhance customer relationships and operational efficiency.',
      active: false,
    },
    {
      question: 'What makes Agent DiY’s brand consulting ethical?',
      answer:
        'We focus on sustainable brand advocacy, transparency, and integrity, ensuring your brand builds trust and long-term value in the digital marketplace.',
      active: false,
    },
    {
      question:
        'How do you measure the success of your digital marketing campaigns?',
      answer:
        'We use real-time analytics and AI-driven performance tracking to monitor KPIs such as engagement, conversion rates, and ROI, providing transparent reports to clients.',
      active: false,
    },
    {
      question: 'Can you customize solutions for different industries?',
      answer:
        'Absolutely. Our AI tools and strategies are flexible and tailored to meet the unique needs of diverse sectors and business models.',
      active: false,
    },
    {
      question: 'How soon can I expect to see results?',
      answer:
        'While timelines vary by project scope, many clients begin to see measurable improvements within weeks of implementation, especially through automation and targeted marketing.',
      active: false,
    },
    {
      question: 'How do I get started with Agent DiY?',
      answer:
        'Contact us via our website or phone to schedule a consultation. We’ll assess your business needs and craft a customized AI-driven strategy to accelerate your digital growth.',
      active: false,
    },
  ]);

  return (
    <section className="relative" id="faq">
      <div className="px-6 py-10 mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl text-white">
          FAQ's
        </h1>

        <hr className="my-6 border-gray-200 border-gray-700" />

        <div>
          {faqs.map((faq, index) => (
            <>
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => handleFaqClick(index)}
                >
                  {faq.active ? <MinusIcon /> : <PlusIcon />}

                  <h1 className="mx-4 text-xl text-gray-700 text-white">
                    {faq.question}
                  </h1>
                </button>

                <div
                  className={`flex mt-8 md:mx-10 ${
                    faq.active ? 'block' : 'hidden'
                  }`}
                >
                  <span className="border border-blue-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <hr className="my-8 border-gray-200 border-gray-700" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
