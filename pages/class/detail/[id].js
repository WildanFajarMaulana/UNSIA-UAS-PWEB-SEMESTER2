import React, { useEffect, useState } from "react";
import { dataModule } from "../../utils/data";
import { dataListModule } from "@/pages/utils/data";
import { useRouter } from "next/router";

const DetailClass = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataDetail, setDataDetail] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setDataDetail(dataListModule.filter((data) => data.id == id));
    }
  }, [id]);

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


  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="min-w-full p-4 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src={dataDetail && dataDetail[0].videoUrl}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
              className="w-full h-auto rounded-lg"
            ></iframe>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold">{dataDetail && dataDetail[0].title}</h1>
            <p>{dataDetail && dataDetail[0].description}</p>
          </div>

          <div className="mb-4">
            <audio controls className="w-full">
              <source src={dataDetail && dataDetail[0].audioUrl} type="audio/mpeg" />
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
  );
};

export default DetailClass;
