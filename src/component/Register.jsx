import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4">
      <div className="w-full max-w-md p-6 md:p-8 space-y-4 md:space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Please Register
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
            />
            {errors.name && <p className="text-red-500 italic">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email",
                },
              })}
              type="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
            />
            {errors.email && <p className="text-red-500 italic">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
            />
            {errors.password && <p className="text-red-500 italic">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 italic">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">Or Sign Up With</p>
          <div className="flex flex-wrap justify-center gap-2 md:space-x-3">
            <button className="flex items-center px-3 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-700">
              <FaGoogle />
              <span>Google</span>
            </button>

            <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-700">
              <FaFacebook />
              <span>Facebook</span>
            </button>

            <button className="flex items-center px-4 py-2 space-x-2 text-white bg-gray-700 rounded hover:bg-gray-900">
              <FaGithub />
              <span>Github</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-center text-gray-600">
          Have an Account? Please{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
