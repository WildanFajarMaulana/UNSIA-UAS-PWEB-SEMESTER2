import { dataQuiz } from "@/pages/utils/data";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [dataSoal, setDataSoal] = useState(null);
  const [soal, setSoal] = useState(null);
  const [indexSoal, setIndexSoal] = useState(null);
  const [indexJawaban, setSoalIndexJawaban] = useState({
    jawaban: {},
  });
  const [dataFinal, setDataFinal] = useState({
    id_quiz: 1,
    jawaban: {},
  });

  const router = useRouter();

  const generateRandomName = () => {
    return faker.internet.userName();
  };

  const handleChangeSoal = (soal_id) => {
    setIndexSoal(soal_id);
    setSoal(dataSoal && dataSoal[0].soal.filter((data) => data.id === soal_id));
  };

  const handleChooseJawaban = (soal_id, jawaban_id) => {
    setSoalIndexJawaban((prevData) => ({
      jawaban: {
        ...prevData?.jawaban,
        [soal_id]: jawaban_id,
      },
    }));
    setDataFinal((prevData) => ({
      ...prevData,
      jawaban: {
        ...prevData.jawaban,
        [soal_id]: jawaban_id,
      },
    }));
  };

  const handleSubmit = () => {
    const dataToLocalStorage = [];
    let score = 0;
    dataSoal[0].soal.map((soal) => {
      const jawabanBenar = soal.jawaban_benar;
      const jawabanPengguna = dataFinal.jawaban[soal.id];
      if (jawabanPengguna === jawabanBenar) {
        score += 25;
      }
    });
    dataToLocalStorage.push({
      name: generateRandomName(),
      class: "IT-204",
      quizTitle: soal && soal[0].text,
      score: score,
      date: new Date().toISOString(),
    });

    const checkDataQuiz = JSON.parse(localStorage.getItem("dataQuiz"));
    if (checkDataQuiz) {
      checkDataQuiz.push({
        name: generateRandomName(),
        class: "IT-204",
        quizTitle: soal && soal[0].text,
        score: score,
        date: new Date().toISOString(),
      });
      localStorage.setItem("dataQuiz", JSON.stringify(checkDataQuiz));
    } else {
      localStorage.setItem("dataQuiz", JSON.stringify(dataToLocalStorage));
    }
    alert(`Nilai Anda : ${score}`);
    router.push("/class/pageScore");
  };

  useEffect(() => {
    setDataSoal(dataQuiz.filter((data) => data.id === 1));
  }, []);

  useEffect(() => {
    setSoal(dataSoal && dataSoal[0].soal.filter((data) => data.id === 1));
    setIndexSoal(
      dataSoal && dataSoal[0].soal.filter((data) => data.id === 1)[0].id
    );
  }, [dataSoal]);

  return (
    <div className="flex flex-row space-x-44">
      <div className="basis-9/12">
        <div className="py-4">
          <p className="text-xl font-medium">
            {soal && soal[0].id}. {soal && soal[0].text}
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          {soal &&
            soal[0].pilihan_jawaban.map((data) => (
              <div
                className={`w-full bg-[#F3F4F6] rounded-xl p-4 hover:opacity-75 cursor-pointer  ${
                  data.id === indexJawaban?.jawaban[soal[0].id] &&
                  "border border-[#4ADE80]"
                }`}
                key={data.id}
                onClick={() => handleChooseJawaban(soal[0].id, data.id)}
              >
                <p className="text-[#1E3A8A]">
                  {data.abjad}{" "}
                  <span className="text-[#4B5563] pl-12">{data.text}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="basis-3/12">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-2 w-full items-center justify-center mb-4">
            {dataSoal &&
              dataSoal[0].soal.map((data, index) => (
                <div
                  className={`w-[100%] h-[60px] flex items-center justify-center bg-[#F3F4F6] rounded-md p-2 hover:opacity-80 cursor-pointer ${
                    data.id === indexSoal && "border border-[#4ADE80]"
                  }`}
                  onClick={() => handleChangeSoal(data.id)}
                >
                  {data.id}
                </div>
              ))}
          </div>
          <div
            className="w-full bg-[#15803D] text-white  flex items-center justify-center rounded-md p-2 cursor-pointer hover:opacity-80"
            onClick={handleSubmit}
          >
            <b>Submit</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
