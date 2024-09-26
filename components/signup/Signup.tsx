"use client";

import { signUp } from "@/app/actions/user";
import { redirect, useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const initialState = {
  success: false,
  message: "",
};
export default function () {
  const [state, formAction] = useFormState(signUp, initialState);
  if (state.success) {
    redirect("/tasks");
  }
  //   const router = useRouter();
  return (
    <div>
      <form className="space-y-4 md:space-y-6" action={formAction}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Ahmed Nadeem"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Create an account
        </button>
        <p className="text-sm font-light text-gray-500 ">
          Already have an account?{" "}
          <a href="#" className="font-medium text-primary-600 hover:underline ">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}
