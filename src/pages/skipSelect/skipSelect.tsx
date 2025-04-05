import React, { useState } from "react";
import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";
import "../../styles/skipSelect.css";
import { SkipCard } from "../../components/SkipCard";
import { SkipData } from "../../types/types";

export const SkipSelect = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);

  const steps = [
    { label: "Postcode", Icon: MapPin },
    { label: "Waste Type", Icon: Trash2 },
    { label: "Select Skip", Icon: Truck },
    { label: "Permit Check", Icon: Shield },
    { label: "Choose Date", Icon: Calendar },
    { label: "Payment", Icon: CreditCard },
  ];

  const mobileSteps = [];
  for (let i = 0; i < steps.length; i += 2) {
    mobileSteps.push(
      steps.slice(i, i + 2).map((step, idx) => ({
        ...step,
        globalIndex: i + idx,
      }))
    );
  }

  return (
    <React.Fragment>
      <>
        <nav className="sm:hidden p-4 mx-auto w-full">
          {mobileSteps.map((pair, rowIndex) => (
            <div key={rowIndex} className="mb-2">
              <div className="grid grid-cols-2 gap-4">
                {pair.map(({ label, Icon, globalIndex }, index) => (
                  <div key={index} className="flex items-center text-white">
                    <Icon
                      className={`w-5 h-5 ${
                        globalIndex >= 3 ? "text-white" : "text-[#0037C1]"
                      }`}
                    />
                    <span className="ml-1 text-sm">{label}</span>
                  </div>
                ))}
              </div>
              {rowIndex !== mobileSteps.length - 1 && (
                <div className="w-full h-px bg-[#2A2A2A] my-2"></div>
              )}
            </div>
          ))}
        </nav>
        <nav className="hidden sm:block p-8 mx-auto w-full">
          <ul className="flex items-center justify-center list-none m-0 p-0">
            {steps.map(({ label, Icon }, index) => (
              <React.Fragment key={index}>
                <li className="flex items-center text-white">
                  <Icon
                    className={`w-6 h-6 ${
                      index >= 3 ? "text-white" : "text-[#0037C1]"
                    }`}
                  />
                  <span className="ml-2">{label}</span>
                </li>
                {index !== steps.length - 1 && (
                  <li
                    className={
                      index === 0
                        ? "w-16 h-px bg-[#0037C1] mx-2 self-center"
                        : "w-16 h-px bg-[#2A2A2A] mx-2 self-center"
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </>
      <div className="mt-20 mb-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
      </div>
      <SkipCard
        onSelect={(skip: SkipData) => setSelectedSkip(skip)}
        selectedSkip={selectedSkip}
      />
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 px-4 flex flex-col sm:flex-row items-center sm:justify-between">
          <span className="font-medium mb-2 sm:mb-0">
            Selected package: {selectedSkip.size} yards -{" "}
            {selectedSkip.hire_period_days} days hire
          </span>
          <div className="flex space-x-2">
            <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500">
              Back
            </button>
            <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">
              Continue
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
