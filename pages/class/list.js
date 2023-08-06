import React from "react";

const CourseItem = ({ imageSrc, label, description }) => {
  return (
    <div className="col-span-6">
      <div className="flex flex-row min-w-full bg-white rounded-md shadow-lg hover:bg-gray-200 hover:cursor-pointer border-1 border-gray-200 mb-2 overflow-hidden">
        <div className="min-w-max">
          <img src={imageSrc} className="filter brightness-75" alt={label} />
        </div>
        <div className="px-4 py-8 gap-2">
          <label className="text-xl font-semibold text-slate-800">
            {label}
          </label>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ListClass = () => {
  const courses = [
    {
      imageSrc: "https://source.unsplash.com/random/200x200",
      label: "Pemrograman Web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
    },
    {
      imageSrc: "https://source.unsplash.com/random/200x200",
      label: "Kalkulus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
    },
    {
      imageSrc: "https://source.unsplash.com/random/200x200",
      label: "Stastitika",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
    },
    {
      imageSrc: "https://source.unsplash.com/random/200x200",
      label: "Sistem Basis Data",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae justo vel neque lacinia pulvinar. Maecenas nibh orci, lobortis vehicula luctus in, pulvinar ac erat.",
    },
  ];

  return (
    <>
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          imageSrc={course.imageSrc}
          label={course.label}
          description={course.description}
        />
      ))}
    </>
  );
};

export default ListClass;
