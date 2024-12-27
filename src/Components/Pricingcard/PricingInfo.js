import React from "react";

const PricingInfo = (props) => {
  const {
    headerTitle,
    headerInfo,
    ListData,
    buttonText,
    isBorderVisible,
    startText,
    price,
  } = props.card;
  return (
    <div
      className={`max-w-sm cursor-pointer bg-white shadow-lg rounded-lg p-6 ${
        isBorderVisible ? "border-2 border-green-500" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            {headerTitle}
          </h3>
          <p className="text-sm text-gray-500 text-left">{headerInfo}</p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <h3 className="text-sm font-semibold text-gray-800 text-right">
            {startText ? startText : null}
          </h3>
          <p className="text-sm text-green-500 text-right">
            {price ? price : null}
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {ListData &&
          ListData.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600 text-justify mb-8"
              >
                {item.isAvailable ? (
                  <span className="bg-green-100 p-1 rounded-full text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="bg-gray-100 p-1 rounded-full text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
                {item.info}
              </li>
            );
          })}
      </ul>

      <div className="flex justify-center">
        <button
          type="button"
          variant="ghost"
          className="text-orange-500 bg-orange-100 hover:text-orange-600 hover:bg-orange-50 mt-4 px-5 py-1 rounded-md transition-colors duration-200 font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingInfo;
