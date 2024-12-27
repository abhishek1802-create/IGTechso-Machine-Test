import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import image from "../../Assets/homeImage.jpeg";

const SectionPage = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative z-10 px-4 sm:px-8 lg:px-40 py-16">
      <div className="flex flex-col lg:flex-row items-stretch justify-between w-full gap-4">
        <div className="w-full lg:w-6/12 flex flex-col gap-6">
          <ul className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStarRegular} className="text-yellow-400" />
            <p>Trusted by over 4,332 students</p>
          </ul>
          <h1 className="text-3xl lg:text-5xl font-semibold">{data.header1}</h1>
          <h1 className="text-3xl lg:text-5xl font-semibold">{data.header2}</h1>
          <p className="leading-8 text-sm lg:text-lg">{data.description}</p>

          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="w-full search-icon rounded-lg border border-gray-300 p-2 pl-4 pr-10"
                placeholder="Search Course Name"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <div className="relative w-[75%] lg:w-[70%] min-h-[400px] rounded-lg overflow-hidden group">
            {!isPlaying ? (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={handlePlayClick}
              >
                <img
                  src={image}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 transform transition-transform duration-300 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-black text-xl ml-1"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/uQXqu5oU1vE?si=wxRdvxrfFvPieERF?autoplay=1"
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPage;
