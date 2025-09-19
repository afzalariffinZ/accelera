'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('monthly');
  const [segment, setSegment] = useState<'client' | 'plan'>('client');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Top Bar */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Title */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Billing Intelligence</span>
              </Link>
              <div className="hidden md:block h-6 w-px bg-gray-300"></div>
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-80">
                <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search clients, invoices, payment plans..."
                  className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Right: Notifications + Account */}
            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">AD</span>
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team Access</a>
                    <div className="border-t border-gray-200 my-1"></div>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600">Total Outstanding Receivables</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">$120,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600">DSO (Days Sales Outstanding)</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">45 days</p>
              <p className="text-xs text-green-600 mt-1">Trending ↓ 10% this month</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600">At-Risk Clients</p>
              <p className="mt-2 text-3xl font-bold text-red-600">5</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600">Cash Collected This Month</p>
              <p className="mt-2 text-3xl font-bold text-green-600">$85,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600">Projected Cashflow (AI Forecast)</p>
              <p className="mt-2 text-3xl font-bold text-indigo-600">+12%</p>
              <p className="text-xs text-gray-500">Next 3 months</p>
            </div>
          </div>
        </section>

        {/* Cashflow Visualization */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Real-Time Cashflow</h2>
            <div className="flex items-center space-x-3">
              <select value={timeframe} onChange={(e) => setTimeframe(e.target.value as any)} className="px-3 py-2 border rounded-lg text-sm">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <select value={segment} onChange={(e) => setSegment(e.target.value as any)} className="px-3 py-2 border rounded-lg text-sm">
                <option value="client">By Client</option>
                <option value="plan">By Plan</option>
              </select>
            </div>
          </div>
          {/* Simple Inline SVG chart placeholder */}
          <div className="h-56 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-gray-400">
            <span>Chart: Incoming payments vs Outstanding (with AI forecast)</span>
          </div>
        </section>

        {/* Client Overview */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Client Overview</h2>
            <Link href="/hub" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Client Profiles</Link>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Outstanding Balance</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Last Payment</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Risk Score</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Next Due</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {[{
                  client: 'Acme Corp', outstanding: '$7,000', last: 'Sep 19', risk: 'Medium', next: 'Oct 5', status: 'On Track'
                },{
                  client: 'Beta Ltd', outstanding: '$12,000', last: 'Sep 10', risk: 'High', next: 'Overdue', status: 'Alert'
                }].map((row) => (
                  <tr key={row.client} className="border-t border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.client}</td>
                    <td className="py-3 px-4">{row.outstanding}</td>
                    <td className="py-3 px-4">{row.last}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.risk === 'High' ? 'text-red-700 bg-red-100' : 'text-yellow-700 bg-yellow-100'}`}>
                        {row.risk}
                      </span>
                    </td>
                    <td className="py-3 px-4">{row.next}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Alert' ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link href="/hub" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Open</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AI Insights + Quick Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6 lg:col-span-2">
            {/* AI Insights / Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Insights & Alerts</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-800">Beta Ltd has missed 2 consecutive payments. Predicted default risk: <span className="font-semibold">72%</span>.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-800">Delta Inc requested invoice split. <span className="font-semibold">Pending finance approval</span>.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-800">Cashflow gap expected in November. Suggest adjusting payment reminders cadence.</p>
                </li>
              </ul>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Log</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sep 19: Acme Corp paid $1,000 (Plan A installment).</p>
                    <p className="text-xs text-gray-600 mt-1">Receipt #RCPT-20931</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sep 18: AI created new invoice INV-10456 for Beta Ltd.</p>
                    <p className="text-xs text-gray-600 mt-1">Amount: $3,200</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sep 17: AI escalated Delta Inc’s feature request to Dev Team.</p>
                    <p className="text-xs text-gray-600 mt-1">Ticket #FEAT-552</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">Approve AI Plan</button>
                <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">Reject AI Plan</button>
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">Escalate Overdues</button>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Send Bulk Reminders</button>
                <div className="border-t border-gray-200 my-3"></div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Export CSV</button>
                  <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Export PDF</button>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
