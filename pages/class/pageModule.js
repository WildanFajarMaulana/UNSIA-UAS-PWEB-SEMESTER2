import React, { useState } from "react";
import { dataModule } from "../utils/data";

const Class = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataModule.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const { videoUrl, title, description, audioUrl } = dataModule[currentIndex];

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                title="YouTube Video Player"
                frameBorder="0"
                allowFullScreen
                className="w-full h-auto rounded-lg"
              ></iframe>
            </div>

            <div className="mb-4">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{description}</p>
            </div>

            <div className="mb-4">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="flex justify-between">
              <button
                className={`px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                Prev
              </button>
              <button
                className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                  currentIndex === dataModule.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
                disabled={currentIndex === dataModule.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
