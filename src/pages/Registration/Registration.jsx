import { Form, Field, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { RegistrationValidation } from "./RegistrationValidation";
import logo from "../../assets/amaterasu.png";

const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  termsAndConditions: false
}

const Registration = () => {
  const navigate = useNavigate();
  
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  const redirectToLogin=()=>{
    navigate("/signin")
  }

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
            {/* FORM STARTS HERE */}
            <Formik
              initialValues={initialValues}
              validationSchema={RegistrationValidation}
              onSubmit={ onSubmit }
            >
               {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col justify-center items-center space-y-4 w-full mt-10">
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
                      <Field
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="off"
                        
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.username && touched.username ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.username}
                        </small>
                      ) : null}
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
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.email && touched.email ?  (
                        <small className="text-red-600 text-xs w-96">
                          {errors.email}
                        </small>
                      ) : null }
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
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.firstName && touched.firstName ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.firstName}
                        </small>
                      ) : null }
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
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="off"
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.lastName && touched.lastName ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.lastName}
                        </small>
                      ) : null }
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
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.password && touched.password ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.password}
                        </small>
                      ) : null }
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
                      <Field
                        id="confirm-password"
                        name="confirmPassword"
                        type="password"
                        autoComplete="off"
                        className="block w-72 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-brand-light placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <small className="text-red-600 text-xs w-96">
                          {errors.confirmPassword}
                        </small>
                      ) : null }
                    </div>
                  </div>
                </div>

                {/* QUICK LINKS */}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex text-sm items-center justify-center">
                      <Field
                        type="checkbox"
                        name="termsAndConditions"
                        className="accent-brand-darker mr-2"
                      />
                      <a href="#" className="font-semibold text-gray-500">
                        I accept the
                        <span className="font-semibold text-brand-dark hover:text-brand-darker">
                          {" "}
                          Terms of Use{" "}
                        </span>
                        and
                        <span className="font-semibold text-brand-dark hover:text-brand-darker">
                          {" "}
                          Privacy Policy
                        </span>
                      </a>
                    </div>
                    {errors.termsAndConditions && touched.termsAndConditions ? (
                        <small className="text-red-600 text-xs w-96 block">
                          {errors.termsAndConditions}
                        </small>
                      ) : null }
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-96 justify-center rounded-md bg-brand-darker px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-darker"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex text-sm items-center justify-center">
                  <p className="text-center text-sm text-gray-500">
                    Already a member?{" "}
                    <a
                      onClick={redirectToLogin}
                      className="font-semibold leading-6 text-brand-darker hover:text-brand-dark"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </Form>
               )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
