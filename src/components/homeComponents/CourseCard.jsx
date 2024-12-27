import { useEffect, useState } from "react";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);

  //   console.log(courses?.title);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("access-token");

      if (!token) {
        alert("You must be logged in to fetch courses.");
      }

      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setCourses(data?.data.data);
    };

    fetchCourses();
  }, []);

  return (
    <div className=" mb-10">
      <h1 className=" text-center mt-8 text-3xl text-blue-500 font-serif">
        {" "}
        My All Course
      </h1>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-10 xl:px-20 px-4 mt-14">
        {courses.map((courses) => (
          <div
            key={courses.id}
            className="overflow-hidden border-2 rounded-lg shadow transition  hover:shadow-lg"
          >
            <img
              alt=""
              src="https://i.ibb.co.com/HVbRJz2/download.png"
              className="h-52 w-full object-cover"
            />
            <p className="block text-xs text-center ">
              {" "}
              {courses.author.name}{" "}
            </p>

            <div className="bg-white p-4 sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {courses?.title}
                </h3>
              </a>

              <p className=" line-clamp-3 text-sm/relaxed text-gray-500">
                {courses.description}
              </p>
              <button className=" flex justify-center mx-auto btn mt-4">
                {" "}
                view details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
