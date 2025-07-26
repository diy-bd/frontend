'use client';
import CheckIcon from '@mui/icons-material/Check';

export default function Pricing() {
  return (
    <div id="pricing" className="py-20 md:px-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-purple-400" data-aos="fade-down">
            Pricing Plans
          </h3>
          <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
            Choose Your Perfect Package
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-gray-400"
            data-aos="fade-down"
          >
            Select from our carefully curated photography packages designed to
            meet your specific needs and budget.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative bg-gray-900 border-gray-800 p-6 rounded-xl  max-w-sm mx-auto mt-20">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-white">STANDARD</h2>
              </div>
              <p className="my-1 text-sm text-gray-400">
                Foundation for Platforms
              </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  7,999
                </span>
                <span className="text-base font-medium text-gray-400">
                  /month
                </span>
              </p>
              <a
                href="#"
                target="_blank"
                className="flex justify-center w-full py-3 mt-4 text-sm font-medium bg-gradient-to-r from-purple-500
                to-indigo-500
                shadow-lg
                hover:from-purple-600
                hover:to-indigo-600
                transition
                duration-300
                ease-in-out
                transform
                hover:scale-105 rounded  hover:bg-transparent  focus:outline-none focus:ring"
              >
                Get started now
              </a>
            </div>
            <div className="px-6 pt-4 pb-8">
              <h3 className="text-sm font-medium text-white">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-powered marketing automation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">
                    META Business portfolio
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    META Business Manager setup & Connect
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    META messaging platforms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    META Brand safety & suitability
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">Creative tools</span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-Powered Common Benefits
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Recover lost sales from cart recovery
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Accelerated testing with Ad variations
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Accurate attribution across GA4, Meta, Google Ads etc.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Advanced AI Competitive Advantage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Fraud detection & prevention
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Personalized product recommendations
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (META)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">Verified page</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Get featured in feed
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Enhanced support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (Google)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Peek into competitors keyword
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Search trend insights
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-violet-900/20 backdrop-blur-lg rounded-xl border-2 border-violet-500 hover:transform hover:-translate-y-2 transition-all duration-300 max-w-md ">
            {/* <div className="relative bg-gray-900 border-gray-800 p-6 rounded-xl  max-w-sm mx-auto mt-20"> */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
              Most Popular
            </div>
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-white">GROWTH</h2>
              </div>
              <p className="my-1 text-sm text-gray-400">
                Commerce & Conversions
              </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  9,999
                </span>
                <span className="text-base font-medium text-gray-400">
                  /month
                </span>
              </p>
              <a
                href="#"
                target="_blank"
                className="flex justify-center w-full py-3 mt-4 text-sm font-medium bg-gradient-to-r from-purple-500
                to-indigo-500
                shadow-lg
                hover:from-purple-600
                hover:to-indigo-600
                transition
                duration-300
                ease-in-out
                transform
                hover:scale-105 rounded  hover:bg-transparent  focus:outline-none focus:ring"
              >
                Get started now
              </a>
            </div>
            <div className="px-6 pt-4 pb-8">
              <h3 className="text-sm font-medium text-white">
                What's included (Standard +)
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-powered marketing automation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">
                    Commerce Manager
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Data sources management
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">Reporting</span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-Powered Common Benefits
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Easiest data pull from any API to Google Sheets
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Click Spikes POS , Inventory & E-Commerce
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Elevate with High-Intent Lead Generation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Advanced AI Competitive Advantage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Generative AI for content creation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Conversational commerce and AI assitants
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (META)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Search optimization
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Impersonation protection
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (Google)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">Keyword planner</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Dynamic search ad
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gray-900 border-gray-800 p-6 rounded-xl  max-w-sm mx-auto mt-20">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-white">
                  PERFORMANCE
                </h2>
              </div>
              <p className="my-1 text-sm text-gray-400">Optimize & Scale </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  14,999
                </span>
                <span className="text-base font-medium text-gray-400">
                  /month
                </span>
              </p>
              <a
                href="#"
                target="_blank"
                className="flex justify-center w-full py-3 mt-4 text-sm font-medium bg-gradient-to-r from-purple-500
                to-indigo-500
                shadow-lg
                hover:from-purple-600
                hover:to-indigo-600
                transition
                duration-300
                ease-in-out
                transform
                hover:scale-105 rounded  hover:bg-transparent  focus:outline-none focus:ring"
              >
                Get started now
              </a>
            </div>
            <div className="px-6 pt-4 pb-8">
              <h3 className="text-sm font-medium text-white">
                What's included (Growth +)
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-powered marketing automation
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">Events manager</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Dynamic Catalog ads
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    AI-Powered Common Benefits
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Analysis of every action with AI
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Highly optimized E-commerce paid results
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Conversion-optimized checkout
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Advanced AI Competitive Advantage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Customer retention and lifetime value (LTV) prediction
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Dynamic pricing and revenue optimization
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (META)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Ad links to reels (2x)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Impersonation protection
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-md text-gray-500 font-semibold">
                    Platform Only Benefits (Google)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Customer pathway interaction
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Attribution model
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Activating customer lifecycle goals
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
