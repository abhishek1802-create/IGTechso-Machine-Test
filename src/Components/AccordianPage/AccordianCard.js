import React from "react";
import AccordianDetail from "./AccordianDetail";

const AccordianCard = ({ card }) => {
  const [showcard, setShowcard] = React.useState(false);
  const [button, setButton] = React.useState(false);

  const handleClick = () => {
    setShowcard(!showcard);
    setButton(!button);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 mb-6 ">
      <div
        className="flex justify-start cursor-pointer gap-4"
        onClick={handleClick}
      >
        {button ? (
          <i className="fa-solid fa-minus bg-gray-300 text-white p-1 mr-4 rounded-full"></i>
        ) : (
          <i className="fa-solid fa-plus bg-green-400 text-white p-1 mr-4 rounded-full"></i>
        )}
        <span className="font-semibold">{card?.title}</span>
      </div>
      {showcard && <AccordianDetail cardDetail={card?.answer} />}
    </div>
  );
};

export default AccordianCard;
