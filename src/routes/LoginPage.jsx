import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DollarSign, User, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState();
      const [error, setError] = useState();
      const {login} = useAuth();
      const navigate = useNavigate();
  
      const handleSubmit = async (e) =>{
          e.preventDefault();
          setError('');
  
          if(!email || !password){
             return setError("Please input all fields");
          }
          if(password.length < 6){
              return setError("Password must contain atleast 6 characters");
          }
          try{
              setLoading(true);
              await login(email, password);
              navigate("/dashboard");
          }catch(err){
              setError('Failed to login: ' + (err.message || "Please try again"));
          }finally{
              setLoading(false);
          }
      }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center font-sans text-white p-4 sm:p-8">
    <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">

      {/* Header Section for Login */}
      <section className="relative p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-xl">
        <DollarSign size={64} className="mb-4 text-green-400 drop-shadow-lg" />
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
          Welcome Back!
        </h1>
        <p className="text-md sm:text-lg text-gray-300">
          Log in to manage your finances.
        </p>
      </section>

      {/* Login Form Section */}
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
            <label htmlFor="username" className="block text-gray-300 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@example.com"
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
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition-colors duration-300 shadow-md flex items-center justify-center"
          >
            Log In <ArrowRight size={20} className="ml-2" />
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-400 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  </div>
  );
}
