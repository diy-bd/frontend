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
                <h2 className="text-lg font-semibold text-white">
                  Professional
                </h2>
              </div>
              <p className="my-1 text-sm text-gray-400">
                For established companies
              </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  $49
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
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">5 workspaces</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Unlimited testimonials
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    10 collection forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    20 embeddable widgets
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    White labeled widgets and forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Custom branding (logo, colors, etc...)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    2 members per workspace
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
                <h2 className="text-2xl font-bold text-white">Agency</h2>
              </div>
              <p className="my-1 text-sm text-gray-400">
                For established companies
              </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  $49
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
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">5 workspaces</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Unlimited testimonials
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    10 collection forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    20 embeddable widgets
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    White labeled widgets and forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Custom branding (logo, colors, etc...)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    2 members per workspace
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gray-900 border-gray-800 p-6 rounded-xl  max-w-sm mx-auto mt-20">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-white">
                  Professional
                </h2>
              </div>
              <p className="my-1 text-sm text-gray-400">
                For established companies
              </p>
              <p className="my-4">
                <span className="text-4xl font-bold tracking-tight text-violet-400">
                  $49
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
                  <CheckIcon className="text-green-500" />
                  <span className="text-sm text-gray-400 ">5 workspaces</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Unlimited testimonials
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    10 collection forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    20 embeddable widgets
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    White labeled widgets and forms
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    Custom branding (logo, colors, etc...)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="text-green-500" />

                  <span className="text-sm text-gray-400">
                    2 members per workspace
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
