import React, { useState } from 'react';
import { FaBox, FaTruck, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const TrackOrderComponent = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const orderDetails = {
    orderNumber: '#ORD123456',
    status: 'In Transit',
    item: 'Premium Wireless Headphones',
    shippingAddress: '123 Main St, Anytown, USA 12345',
  };

  const steps = [
    { icon: FaBox, label: 'Order Placed' },
    { icon: FaSpinner, label: 'Processing' },
    { icon: FaTruck, label: 'In Transit' },
    { icon: FaCheckCircle, label: 'Delivered' },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Track Your Order</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg font-semibold text-gray-700">Order Number:</p>
            <p className="text-xl text-blue-600">{orderDetails.orderNumber}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Status:</p>
            <p className="text-xl text-green-600">{orderDetails.status}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-gray-700">Item:</p>
            <p className="text-xl text-gray-800">{orderDetails.item}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-gray-700">Shipping Address:</p>
            <p className="text-xl text-gray-800">{orderDetails.shippingAddress}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                } transition-colors duration-300 ease-in-out`}
              >
                <step.icon className="text-2xl" />
              </div>
              <p className={`mt-2 text-sm font-medium ${index <= currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <button
        onClick={handleNextStep}
        disabled={currentStep === steps.length - 1}
        className={`w-full py-3 px-6 text-lg font-semibold text-white rounded-lg transition-colors duration-300 ${
          currentStep === steps.length - 1
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        }`}
        aria-label={currentStep === steps.length - 1 ? 'Order tracking complete' : 'Proceed to next tracking step'}
      >
        {currentStep === steps.length - 1 ? 'Order Delivered' : 'Next Step'}
      </button>
    </div>
  );
};

export default TrackOrderComponent;