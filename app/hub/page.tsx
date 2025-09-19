'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HubPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Top Bar */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Greeting */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Canvax
                </span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome back, <span className="text-blue-600">John Doe</span>
              </h1>
            </div>

            {/* Right Side - Notifications and Account */}
            <div className="flex items-center space-x-4">
              {/* Notifications Bell */}
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">JD</span>
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <div className="border-t border-gray-200 my-1"></div>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* At-a-Glance Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Outstanding Balance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Outstanding Balance</p>
                  <p className="text-3xl font-bold text-red-600">$6,000</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Active Payment Plans */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Payment Plans</p>
                  <p className="text-3xl font-bold text-blue-600">1</p>
                  <p className="text-xs text-gray-500 mt-1">Next: Oct 5, 2025</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Invoices */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Invoices</p>
                  <p className="text-3xl font-bold text-gray-900">15</p>
                  <p className="text-xs text-gray-500 mt-1">3 unpaid, 12 paid</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Next Due Date */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Due Date</p>
                  <p className="text-2xl font-bold text-orange-600">Oct 5, 2025</p>
                  <button className="mt-2 bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-orange-700 transition-colors">
                    Pay Now
                  </button>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Quick Navigation and Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/invoices" className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">View All Invoices</h4>
                        <p className="text-sm text-gray-600">Gmail-style list of invoices</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/payment-plans" className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">View Active Plans</h4>
                        <p className="text-sm text-gray-600">Installment progress & details</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/chatbot" className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AI Assistance</h4>
                        <p className="text-sm text-gray-600">Adjust payments & get help</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/feature-requests" className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Feature Requests</h4>
                        <p className="text-sm text-gray-600">Submit requests & contact dev team</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Paid $1,000 toward Plan A</p>
                        <span className="text-xs text-gray-500">Sep 19, 2025</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Payment processed successfully</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Invoice INV-10293 generated</p>
                        <span className="text-xs text-gray-500">Sep 10, 2025</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Amount: $2,000 - Due Oct 10, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">AI reminder sent for upcoming payment</p>
                        <span className="text-xs text-gray-500">Sep 5, 2025</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Reminder for Plan A payment due Sep 15</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Payment plan created</p>
                        <span className="text-xs text-gray-500">Aug 28, 2025</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">3-month installment plan for $6,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - AI Insights and Notifications */}
          <div className="space-y-6">
            {/* AI Insights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Smart Payment Suggestion</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      AI suggests splitting your next $6,000 payment into 3 smaller installments based on your cashflow.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Due Dates */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Payments</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                      <p className="font-medium text-orange-900">Plan A Payment</p>
                      <p className="text-sm text-orange-700">$2,000 due</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-orange-900">Oct 5</p>
                      <p className="text-xs text-orange-600">5 days</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Invoice INV-10293</p>
                      <p className="text-sm text-gray-700">$2,000 due</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">Oct 10</p>
                      <p className="text-xs text-gray-600">10 days</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Plan A Payment</p>
                      <p className="text-sm text-gray-700">$2,000 due</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">Nov 5</p>
                      <p className="text-xs text-gray-600">36 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-3">
                  <Link href="/chatbot" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">Chat with AI</span>
                  </Link>
                  <a href="mailto:support@canvax.com" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">Email Support</span>
                  </a>
                  <a href="/terms" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">Terms & Legal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}