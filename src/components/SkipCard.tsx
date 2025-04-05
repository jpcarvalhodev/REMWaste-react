import { SkipData } from "../types/types";
import { skipData } from "../utils/skipData";

interface SkipCardProps {
  onSelect: (skip: SkipData) => void;
  selectedSkip: SkipData | null;
}

export const SkipCard = ({ onSelect, selectedSkip }: SkipCardProps) => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {skipData.map((skip) => {
        const weeks = skip.hire_period_days / 7;
        const pricePerWeek = skip.price_before_vat
          ? (skip.price_before_vat / weeks).toFixed(2)
          : null;

        return (
          <div
            key={skip.id}
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {`${skip.size} Yards Skip Package`}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              {skip.price_before_vat ? (
                <>
                  <span className="text-3xl font-semibold">£</span>
                  <span className="text-3xl font-extrabold tracking-tight">
                    {pricePerWeek}
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /week
                  </span>
                </>
              ) : (
                <span className="text-3xl font-extrabold tracking-tight">
                  Price on request
                </span>
              )}
            </div>
            <ul className="my-7 space-y-3">
              <li className="flex items-center space-x-3">
                <span className="inline-block bg-gray-600 text-white-300 text-xs font-semibold rounded-full px-2 py-1">
                  Size
                </span>
                <span className="text-base font-normal leading-tight text-white-300">
                  {skip.size} yards
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="inline-block bg-gray-600 text-white-300 text-xs font-semibold rounded-full px-2 py-1">
                  Hire Period
                </span>
                <span className="text-base font-normal leading-tight text-white-300">
                  {skip.hire_period_days} days
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="inline-block bg-gray-600 text-white-300 text-xs font-semibold rounded-full px-2 py-1">
                  Road Allowed
                </span>
                <span className="text-base font-normal leading-tight text-white-300">
                  {skip.allowed_on_road ? "Yes" : "Private Property Only"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="inline-block bg-gray-600 text-white-300 text-xs font-semibold rounded-full px-2 py-1">
                  Heavy Waste?
                </span>
                <span className="text-base font-normal leading-tight text-white-300">
                  {skip.allows_heavy_waste ? "Yes" : "No"}
                </span>
              </li>
            </ul>
            <button
              onClick={() => onSelect(skip)}
              className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow transition duration-200 ${
                selectedSkip?.id === skip.id
                  ? "bg-[#0037C1] hover:bg-[#0053D0]"
                  : "bg-gray-600 hover:bg-[#0037C1]"
              }`}
            >
              {selectedSkip?.id === skip.id ? "Selected" : "Select"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
