import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  // this means we use setLoading to set the value of loading to true or false
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // on submit
  const handleSubmit = async (e) => {
    // to prevent page from being refreshed when click on sign up
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      // wait for api
      // we can use axios instead of fetch
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // convert it to json format
      const data = await res.json();

      // now we have the data
      // set loading to false
      setLoading(false);

      // sometimes we get the data and it doesnt throw an error but the error code would be failure
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="bg-primary h-screen">
      <h1 className="text-secondary text-3xl text-center font-semibold py-16 sm:pb-3 sm:pt-8 sm:text-2xl">
        Sign Up
      </h1>
      <form
        className="flex flex-col gap-5 max-w-lg mx-auto sm:m-5 sm:mx-auto sm:px-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 rounded-lg"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 rounded-lg"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="p-3 rounded-lg"
          required
          onChange={handleChange}
        />

        {/* if loading is true then button will be disabled */}
        <button
          type="submit"
          id="submit"
          disabled={loading}
          className="p-3 rounded-lg bg-secondary text-white text-base sm:text-sm hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <button
          type="button"
          className="p-3 rounded-lg bg-red-800 text-white text-base sm:text-sm hover:opacity-90"
        >
          Continue with <i class="ri-google-fill"></i>
        </button>
      </form>
      <div className="flex justify-center mt-4 gap-2 text-xs">
        <p>Have an account? </p>
        <Link to="/sign-in">
          <span className="text-blue-500 hover:underline">Sign in</span>
        </Link>
      </div>
      <p className="text-base flex max-w-lg mx-auto my-7 p-1 font-semibold rounded-lg text-red-700 justify-center">
        {error && "Something went wrong!"}
      </p>
    </div>
  );
}

export default SignUp;
