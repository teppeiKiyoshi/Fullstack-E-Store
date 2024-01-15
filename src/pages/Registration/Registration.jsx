import logo from "../../assets/amaterasu.png";

const Registration = () => {
  return (
    <>
      {/* <div className="backGrnd z-10"></div> */}
      <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8 h-overall-container bg-gray-100">
        <div className="w-auto px-20 py-20 rounded-md bg-white shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="w-full">
            <form
              className="flex flex-col justify-center items-center space-y-4 w-full mt-10"
              action="#"
              method="POST"
            >
              {/* USERNAME AND EMAIL HERE */}
              {/* overall input container */}
              <div className="flex justify-between space-x-6 ">
                {/* per row input container */}
                <div className="flex flex-col w-full ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="off"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* FIRST NAME AND LAST NAME HERE */}
              <div className="flex justify-between space-x-6 ">
                {/* per row input container */}
                <div className="flex flex-col w-full ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="off"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="off"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* PASSWORD HERE */}
              <div className="flex justify-between space-x-6 ">
                {/* per row input container */}
                <div className="flex flex-col w-full ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="current-confirm-password"
                      required
                      className="block w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex text-sm items-center justify-center">
                    <input type="checkbox" className="accent-brand-darker mr-2" />
                    <a
                      href="#"
                      className="font-semibold text-gray-500"
                    >
                      I accept the
                      <span className="font-semibold text-brand-dark hover:text-brand-darker"> Terms of Use </span> 
                      and 
                      <span className="font-semibold text-brand-dark hover:text-brand-darker"> Privacy Policy</span>
                    </a>
                  </div>
                </div>
              
               
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-96 justify-center rounded-md bg-brand-darker px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-darker"
                >
                  Sign in
                </button>
              </div>
              <div className="flex text-sm items-center justify-center">
                  <p className="text-center text-sm text-gray-500">
                    Already a member?{" "}
                    <a
                      href="#"
                      className="font-semibold leading-6 text-brand-darker hover:text-brand-dark"
                    >
                      Login here
                    </a>
                  </p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
