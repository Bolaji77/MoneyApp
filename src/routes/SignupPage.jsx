import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DollarSign, Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      return setError("Please input all fields");
    }
    if (password !== confirmPassword) {
      return setError("Passwords fields must match");
    }
    if (password.length < 6) {
      return setError("Password must contain atleast 6 characters");
    }
    try {
      setLoading(true);
      await signup(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(
        "Failed to create account: " + (err.message || "Please try again")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center font-sans text-white p-4 sm:p-8">
    <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">

      {/* Header Section for Signup */}
      <section className="relative p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-xl">
        <DollarSign size={64} className="mb-4 text-green-400 drop-shadow-lg" />
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
          Create Your Account
        </h1>
        <p className="text-md sm:text-lg text-gray-300">
          Join us and take control of your finances.
        </p>
      </section>

      {/* Signup Form Section */}
      <section className="p-8 sm:p-10 bg-gray-900 border-t border-gray-800">
        {/*Error message*/}
        {
            error && (<div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
                        {error};
                        ;
                        
                    </div>)
                    }
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              />
            </div>

            <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-2">
             Confirm Password
            </label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              />
            </div>
</div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors duration-300 shadow-md flex items-center justify-center"
          >
            Sign Up <ArrowRight size={20} className="ml-2" />
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-green-400 hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </section>
    </div>
  </div>
  );
}
