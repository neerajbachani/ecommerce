import React from 'react'
import { useState } from 'react';

const OrderTracker = () => {
    const [activeStep, setActiveStep] = useState(4);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  return (
    <ul
      data-te-stepper-init
      className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
    >
      {/* First item */}
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active={activeStep === 1}
        className="w-[4.5rem] flex-auto"
        onClick={() => handleStepClick(1)}
      >
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
        >
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
          >
            1
          </span>
          <span
            data-te-stepper-head-text-ref
            className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
          >
            Placed
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className={`absolute w-full p-4 transition-all duration-500 ease-in-out ${
            activeStep === 1 ? ' bg-primarycolor' : 'opacity-0'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </li>

      {/* Second item */}
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active={activeStep === 2}
        className="w-[4.5rem] flex-auto"
        onClick={() => handleStepClick(2)}
      >
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
        >
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
          >
            2
          </span>
          <span
            data-te-stepper-head-text-ref
            className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
          >
            Order Confirmed
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className={`absolute w-full p-4 transition-all duration-500 ease-in-out ${
            activeStep === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </li>

      {/* Third item */}
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active={activeStep === 3}
        className="w-[4.5rem] flex-auto"
        onClick={() => handleStepClick(3)}
      >
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
        >
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
          >
            3
          </span>
          <span
            data-te-stepper-head-text-ref
            className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
          >
            Shipped
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className={`absolute w-full p-4 transition-all duration-500 ease-in-out ${
            activeStep === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </li>
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active={activeStep === 3}
        className="w-[4.5rem] flex-auto"
        onClick={() => handleStepClick(3)}
      >
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
        >
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
          >
            4
          </span>
          <span
            data-te-stepper-head-text-ref
            className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
          >
            Out For Delivery
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className={`absolute w-full p-4 transition-all duration-500 ease-in-out ${
            activeStep === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </li>
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active={activeStep === 3}
        className="w-[4.5rem] flex-auto"
        onClick={() => handleStepClick(3)}
      >
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
        >
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
          >
            5
          </span>
          <span
            data-te-stepper-head-text-ref
            className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
          >
            Delivered
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className={`absolute w-full p-4 transition-all duration-500 ease-in-out ${
            activeStep === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </li>
    </ul>
  )
}

export default OrderTracker