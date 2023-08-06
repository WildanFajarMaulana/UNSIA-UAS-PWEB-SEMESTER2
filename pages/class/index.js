import React from "react";
import Image from "next/image";
import { courses } from "@/utils/data";
import Link from "next/link";

const CourseItem = ({ imageSrc, imageUrl, label, description }) => {
  return (
    <div className="col-span-6">
      <Link href={imageUrl}>
        <div className="flex flex-row min-w-full bg-white rounded-md shadow-lg hover:bg-gray-200 hover:cursor-pointer border-1 border-gray-200 mb-2 overflow-hidden">
          <div className="min-w-max">
            <Image
              src={imageSrc}
              className="filter brightness-75 w-[200px] h-[200px]"
              alt={label}
              width={200}
              height={200}
            />
          </div>
          <div className="px-4 py-8 gap-2">
            <label className="text-xl font-semibold text-slate-800">
              {label}
            </label>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ListClass = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          imageSrc={course.imageSrc}
          imageUrl={course.imageUrl}
          label={course.label}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default ListClass;
