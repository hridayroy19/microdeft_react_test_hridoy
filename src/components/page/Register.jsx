import { Link } from "react-router-dom";

const Register = () => {
  const handelRegister = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    const userData = { name, email, password };

    fetch("https://react-interview.crd4lc.easypanel.host/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="font-serif">
      <div className="bg-base-200 lg:h-screen md:h-screen flex justify-center items-center">
        <div className="w-full lg:w-[800px] md:w-[700px] lg:h-[460px] shadow-2xl bg-[#5e91dd7c] flex flex-col lg:flex-row md:flex-row justify-center items-center">
          <div className="w-full lg:w-[400px] md:px-2 px-5 flex md:border-e-2 justify-center lg:justify-start">
            <img
              src="https://i.ibb.co.com/vwr8TQ7/4957136-removebg-preview-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[380px] px-2">
            <h1 className=" text-blue-700 lg:mt-8 mt-6 text-center font-extralight font-serif text-3xl">
              Welcome back
            </h1>
            <div className="w-full mx-auto">
              <form onSubmit={handelRegister} className="card-body">
                <div>
                  <label
                    htmlFor="name"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <input
                      type="text"
                      name="name"
                      className="grow"
                      placeholder="Enter your Name"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <input
                      type="email"
                      name="email"
                      className="grow"
                      placeholder="Email Address"
                    />
                  </label>
                </div>

                <div className=" mt-3">
                  <label
                    htmlFor="password"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <input
                      name="password"
                      type="password"
                      className="grow"
                      minLength={8}
                      placeholder="Password"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 border-none btn btn-block mt-3"
                >
                  Login Now
                </button>

                <h1 className="text-white ml-4 mt-1  ">
                  have a account?
                  <span className="ml-2  text-blue-700">
                    <Link to={"/login"}> Login </Link>
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
