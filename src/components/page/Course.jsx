import Navbar from "../homeComponents/Navbar";

const Course = () => {
    const handelCourse = async (e) => {
        e.preventDefault();
        const from = e.target;
        const title = from.title.value;
        const description = from.description.value;
        const badge_text = from.badge_text.value;
        const badge_color = from.badge_color.value;
        const instructor_name = from.instructor_name.value;
    
        const courseData = {title,description,badge_text,badge_color,instructor_name  };
        console.log(courseData);

      };

  return (
    <>
      <Navbar />
      <section className="">
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-blue-300 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4" onSubmit={handelCourse}>
              <div className="grid grid-cols-2 text-black gap-4 md:grid-cols-2">
                <div>
                  <span className="label-text">title</span>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Product Name"
                    type="text"
                    name="title"
                  />
                </div>
                <div>
                  <span className="label-text">badge text</span>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="badge_text"
                    type="text"
                    name="badge_text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <span className="label-text">badge color</span>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="badge_color"
                    type="text"
                    name="badge_color"
                  />
                </div>
                <div>
                  <span className="label-text">instructor name</span>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="instructor_name"
                    type="text"
                    name="instructor_name"
                  />
                </div>

              </div>
              <div>
                <span className="label-text"> Descriiption </span>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="description"
                  rows="4"
                  name="description"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
