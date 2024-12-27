import React, { useState } from "react";
import Slider from "react-slick";
import { VIDEO_Data } from "../../Utils/constants";
import { SLIDER_Header } from "../../Utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const VideoSlider = ({ slider_detail, sliderHeight }) => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const containerHeight = sliderHeight
    ? `h-[${sliderHeight}px]`
    : "min-h-screen";

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slider_detail.slidesToShow,
    slidesToScroll: slider_detail.slidesToScroll,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className={`${containerHeight} py-8`}>
      <div className="flex flex-col items-center">
        {!slider_detail.hide_header && (
          <div className="mb-8 text-center">
            <SectionHeader
              header={SLIDER_Header.header}
              tagLine={SLIDER_Header.tagLine}
            />
          </div>
        )}
        <div className="w-full max-w-5xl">
          <Slider {...settings}>
            {VIDEO_Data.map((video) => (
              <div key={video.id} className="p-4">
                <div className="bg-white rounded-sm w-[300px] h-[300px] overflow-hidden">
                  {playingVideo === video.id ? (
                    <video
                      src={video.videoUrl}
                      className="w-full h-40 object-cover"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <div
                      className="relative cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <button className="text-white text-3xl">▶</button>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 text-sm mr-2">
                        ⭐ {video.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({video.reviews} reviews)
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      👀 {video.students} students watched
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
