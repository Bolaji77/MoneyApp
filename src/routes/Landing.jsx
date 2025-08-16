import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Zap, ShieldCheck, BarChart2, Users, ArrowRight } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center font-sans text-white p-4 sm:p-8">
      <div className="w-full max-w-6xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">

        {/* Hero Section */}
        <section className="relative p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-xl">
          <div className="flex">
          <DollarSign size={80} className="mb-6 text-green-400 drop-shadow-lg" />
          <p className="mb-6 text-green-400 text-xl mt-8 drop-shadow-lg">MoneyApp</p>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Bank Smarter. Live Better.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-8">
            Manage your money with ease, send and receive payments instantly, and invest in your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <Link
          to="/login"
          
          className="bg-green-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-green-600 transition-colors duration-300 shadow-lg flex items-center justify-center"
        >
          Sign Up Now <ArrowRight size={24} className="ml-2" />
        </Link>

          </div>
        </section>

        {/* Features Section */}
        <section className="p-8 sm:p-12 bg-gray-900 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition-all duration-300">
              <Zap size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Instant Transfers</h3>
              <p className="text-gray-400">Send and receive money to anyone, anytime, with lightning speed.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition-all duration-300">
              <ShieldCheck size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-400">Your security is our top priority. We use advanced encryption to protect your data.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition-all duration-300">
              <BarChart2 size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Investments</h3>
              <p className="text-gray-400">Grow your wealth with our intuitive investment tools and expert insights.</p>
            </div>
          </div>
        </section>

        {/* Testimonials/Social Proof Section (optional, can be expanded) */}
        <section className="p-8 sm:p-12 bg-gray-900 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <Users size={40} className="text-gray-400 mx-auto mb-4" />
              <p className="italic text-gray-300 mb-4">"This app has transformed how I manage my finances. Simple, fast, and secure!"</p>
              <p className="font-semibold text-white">- Happy User</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-8 sm:p-12 bg-gradient-to-tl from-gray-900 to-gray-800 flex flex-col items-center justify-center text-center rounded-b-xl border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Take Control of Your Money?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Join thousands of satisfied users who trust us with their financial journey. It's free to get started!
          </p>
          <Link
          to="/login"
          
          className="bg-green-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-green-600 transition-colors duration-300 shadow-lg flex items-center justify-center"
        >
          Sign Up Now <ArrowRight size={24} className="ml-2" />
        </Link>

        </section>
      </div>
    </div>
  );
}

export default LandingPage;
