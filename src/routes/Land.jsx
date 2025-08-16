import React from 'react';
import { DollarSign, User, Lock, ArrowRight } from 'lucide-react';

function App() {
  return (

  );
}

export default App;

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          🌟 Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Log in to continue your VIP experience.
        </p>



        <form  className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input

              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input

              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </form>

        {/* No Account Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>