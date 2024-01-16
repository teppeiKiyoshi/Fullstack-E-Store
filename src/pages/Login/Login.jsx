import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginValidation } from "./LoginValidation";

import logo from "../../assets/amaterasu.png";

const initialValues = {
  username: "",
  password: ""
}

const Login = () => {
  const navigate = useNavigate();
  
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  const redirectToSignUp=()=>{
    navigate("/signup")
  }

  return (
    <>
      {/* <div className="backGrnd z-10"></div> */}
      <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 h-overall-container bg-gray-100">
        <div className="w-1/3 py-20 rounded-md bg-white shadow-md">
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

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* FORM STARTS HERE */}
            <Formik
            initialValues={initialValues}
            validationSchema={LoginValidation}
            onSubmit={ onSubmit }
            >
              {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-brand-dark"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    />
                    {errors.username && touched.username ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.username}
                        </small>
                      ) : null}
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
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand-darker sm:text-sm sm:leading-6"
                    />
                    {errors.password && touched.password ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.password}
                        </small>
                      ) : null }
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-brand-darker px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-darker"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
              )}
            </Formik>

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
                onClick={redirectToSignUp}
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
