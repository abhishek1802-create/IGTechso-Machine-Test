import React from "react";
import { FOOTER_Data } from "../../Utils/constants";

const FooterSection = () => {
  return (
    <div className="flex items-center justify-center h-[350px]">
      <footer className="w-full max-w-4xl bg-white p-2 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {FOOTER_Data &&
            FOOTER_Data.map((data, index) => {
              return (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-4">{data.title}</h4>
                  <ul className="space-y-2">
                    <li>{data.link1}</li>
                    <li>{data.link2}</li>
                    <li>{data.link3}</li>
                    <li>{data.link4}</li>
                    <li>{data.link5}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
