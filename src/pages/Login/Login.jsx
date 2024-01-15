import logo from "../../assets/amaterasu.png";

const Login = () => {
  return (
    <>
      {/* <div className="backGrnd z-10"></div> */}
      <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 h-overall-container bg-gray-100">
      <div className="w-1/3 py-20 rounded-md bg-white shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-brand-dark"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-brand-dark"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand-darker sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brand-darker px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-darker"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex text-sm items-center justify-center mt-3 mb-2">
            <a
              href="#"
              className="font-semibold text-brand-darker hover:text-brand-dark"
            >
              Forgot password?
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-brand-darker hover:text-brand-dark"
            >
              Create an account now!
            </a>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
