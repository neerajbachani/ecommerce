// src/Stepper.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const Stepper = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: 'Login' },
    { label: 'Add Delivery Address' },
    { label: 'Order Summary' },
    { label: 'Payment' },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const stepParam = searchParams.get('step');
    if (stepParam) {
      setCurrentStep(parseInt(stepParam, 10));
    }
  }, [location.search]);

  const handleNext = () => {
    const nextStep = Math.min(currentStep + 1, steps.length);
    updateURLParams(nextStep);
    setCurrentStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = Math.max(currentStep - 1, 1);
    updateURLParams(prevStep);
    setCurrentStep(prevStep);
  };

  const updateURLParams = (step) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('step', step);
    window.history.replaceState(null, '', `${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div>
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mx-auto max-w-lg md:max-w-5xl lg:max-w-7xl ">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex md:w-full items-center ${
              index < currentStep - 1
                ? 'after:content-["/"] after:mx-2 after:text-gray-200 dark:after:text-gray-500  '
                : 'after:content-[""] after:w-full after:h-1 after:border-b  sm:after:inline-block after:mx-6 xl:after:mx-10 '
            }`}
          >
            {index < currentStep - 1 ? (
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {step.label}
              </span>
            ) : (
              <>
                <span className="me-2">{index + 1}</span>
                {step.label}
              </>
            )}
          </li>
        ))}
      </ol>

      <div className=' mt-[5rem] ' >
        {currentStep == 2? <DeliveryAddressForm/> : <OrderSummary/>}
      </div>

      <div className="mt-4 flex justify-between">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={handleBack}
          >
            Back
          </button>
        )}

        {currentStep < steps.length && (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
      
    </div>
  );
};

export default Stepper;


