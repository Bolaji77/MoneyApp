import React, { useState } from 'react';
import { CreditCard, DollarSign, Repeat, TrendingUp, BellRing, Settings, Send, ArrowDownToLine, XCircle } from 'lucide-react';

// Main App component for the banking account page with Cash App styling
function Dashboard() {
  const availableBalance = '17,520.87'; // The available balance to display
  const accountName = 'Lovett Da Silva'; // The account holder's name

  // State to control the visibility of the deactivation message modal
  const [showMessageModal, setShowMessageModal] = useState(false);

  // Function to handle button clicks and show the deactivation message
  const handleButtonClick = () => {
    setShowMessageModal(true);
  };

  // Function to close the deactivation message modal
  const closeMessageModal = () => {
    setShowMessageModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 lg:p-8 flex items-center justify-center font-sans text-white ">
      <div className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">

        {/* Header Section - Inspired by Cash App's clean, dark aesthetic */}
        <div className="p-6 sm:p-8 flex flex-col items-center">
          <DollarSign size={64} className="mb-4 text-green-400 drop-shadow-md" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-white">MoneyApp</h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-200 mb-2">Account Name: {accountName}</p>
          <p className="text-lg sm:text-xl font-light text-gray-300">Your secure financial overview.</p>
        </div>

        {/* Balance Display Section - Prominent and clear */}
        <div className="p-6 sm:p-8 border-b border-gray-800">
          <div className="flex flex-col items-center">
            <p className="text-xl text-gray-400 font-medium mb-2">Available Balance</p>
            <p className="text-5xl sm:text-6xl font-bold text-green-400 tracking-tight flex items-center">
              ${availableBalance}
            </p>
          </div>
        </div>

        {/* Quick Actions Section - Clean buttons with icons */}
        <div className="p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-800">
          <button
            className="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 shadow-sm"
            onClick={handleButtonClick}
          >
            <Send size={28} className="text-green-400 mb-2" />
            <span className="text-sm font-medium text-white">Send</span>
          </button>
          <button
            className="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 shadow-sm"
            onClick={handleButtonClick}
          >
            <ArrowDownToLine size={28} className="text-green-400 mb-2" />
            <span className="text-sm font-medium text-white">Request</span>
          </button>
          <button
            className="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 shadow-sm"
            onClick={handleButtonClick}
          >
            <BellRing size={28} className="text-green-400 mb-2" />
            <span className="text-sm font-medium text-white">Activity</span>
          </button>
          <button
            className="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 shadow-sm"
            onClick={handleButtonClick}
          >
            <Settings size={28} className="text-green-400 mb-2" />
            <span className="text-sm font-medium text-white">Profile</span>
          </button>
        </div>

        {/* Recent Transactions Section - Darker background, clear text */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <ul className="space-y-4">
            {/* Example Transaction 1 */}
            
            {/* Example Transaction 2 */}
            



            {/* Example Transaction 3 */}
            <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-red-900 p-2 rounded-full mr-3">
                  <CreditCard size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Sent to Royal Coffee</p>
                  <p className="text-sm text-gray-400">Morning coffee</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-400">-$45.75</p>
                <p className="text-xs text-gray-400">Jan 05, 2015</p>
              </div>
            </li>

            <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-red-900 p-2 rounded-full mr-3">
                  <DollarSign size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Sent to Danny Lewis</p>
                  <p className="text-sm text-gray-400">Snow Packing</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-400">-$170.00</p>
                <p className="text-xs text-gray-400">Jan 15, 2015</p>
              </div>
            </li>

            <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-green-900 p-2 rounded-full mr-3">
                  <DollarSign size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Received from John Smith</p>
                  <p className="text-sm text-gray-400">Loan repayment</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-400">+$2,500.00</p>
                <p className="text-xs text-gray-400">Mar 02, 2015</p>
              </div>
            </li>

            <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-red-900 p-2 rounded-full mr-3">
                  <DollarSign size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Sent to Jane Kurt</p>
                  <p className="text-sm text-gray-400">For dinner</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-400">-$120.50</p>
                <p className="text-xs text-gray-400">Aug 15, 2015</p>
              </div>
            </li>

            <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-green-900 p-2 rounded-full mr-3">
                  <DollarSign size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Received from David Da Silva</p>
                  <p className="text-sm text-gray-400">Heart Surgery</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-400">+$3,500.00</p>
                <p className="text-xs text-gray-400">Sept 9, 2015</p>
              </div>
            </li>
          </ul>
          <button
            className="mt-6 w-full flex items-center justify-center py-3 px-4 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md"
            onClick={handleButtonClick}
          >
            View All Activity
            <TrendingUp size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Deactivation Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 max-w-md w-full text-center border border-gray-700">
            <XCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Account Deactivated</h3>
            <p className="text-gray-300 mb-6">
              Your account is deactivated at the moment. Kindly visit the nearest branch close to you to resolve the issue.
            </p>
            <button
              onClick={closeMessageModal}
              className="w-full py-3 px-4 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;