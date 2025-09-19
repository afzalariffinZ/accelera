'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PaymentPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'active' | 'historical'>('active');

  const activePlans = [
    {
      id: 'plan-a',
      invoiceRef: 'INV-10293',
      planName: 'Plan A',
      totalAmount: 7000,
      remainingBalance: 6000,
      nextDueDate: 'Oct 5, 2025',
      status: 'On Track',
      progress: { completed: 2, total: 5 },
      daysUntilDue: 5,
      schedule: [
        { installment: 1, amount: 1000, dueDate: 'Sep 19, 2025', status: 'Paid' },
        { installment: 2, amount: 2000, dueDate: 'Oct 5, 2025', status: 'Pending' },
        { installment: 3, amount: 2000, dueDate: 'Nov 5, 2025', status: 'Upcoming' },
        { installment: 4, amount: 2000, dueDate: 'Dec 5, 2025', status: 'Upcoming' },
      ]
    },
    {
      id: 'plan-b',
      invoiceRef: 'INV-10294',
      planName: 'Plan B',
      totalAmount: 4500,
      remainingBalance: 1500,
      nextDueDate: 'Oct 15, 2025',
      status: 'On Track',
      progress: { completed: 2, total: 3 },
      daysUntilDue: 15,
      schedule: [
        { installment: 1, amount: 1500, dueDate: 'Aug 15, 2025', status: 'Paid' },
        { installment: 2, amount: 1500, dueDate: 'Sep 15, 2025', status: 'Paid' },
        { installment: 3, amount: 1500, dueDate: 'Oct 15, 2025', status: 'Pending' },
      ]
    }
  ];

  const historicalPlans = [
    {
      id: 'plan-completed-1',
      invoiceRef: 'INV-10290',
      planName: 'Plan C',
      totalAmount: 3000,
      status: 'Completed',
      completedDate: 'Aug 30, 2025',
      progress: { completed: 3, total: 3 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'text-green-600 bg-green-100';
      case 'Overdue': return 'text-red-600 bg-red-100';
      case 'Completed': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressBar = (completed: number, total: number) => {
    const percentage = (completed / total) * 100;
    return (
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-600 font-medium">{completed}/{total}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/hub" className="text-blue-600 hover:text-blue-700 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Your Payment Plans</h1>
            </div>
            <Link href="/chatbot" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Request New Plan
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Notifications / Alerts */}
        <div className="mb-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <p className="font-medium text-orange-900">Upcoming Payment</p>
                <p className="text-sm text-orange-800">Your next payment of $2,000 is due in 5 days (Oct 5, 2025)</p>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                Pay Now
              </button>
            </div>
          </div>

          {/* Reminder Settings */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="text-sm font-medium text-blue-900">Payment Reminders</span>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                  <span className="text-sm text-blue-800">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                  <span className="text-sm text-blue-800">SMS</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('active')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Active Plans ({activePlans.length})
              </button>
              <button
                onClick={() => setActiveTab('historical')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'historical'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Historical Plans ({historicalPlans.length})
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'active' && (
          <div className="space-y-6">
            {/* Plan Overview */}
            <div className="grid gap-6">
              {activePlans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-gray-900">{plan.planName}</h3>
                        <span className="text-sm text-gray-500">({plan.invoiceRef})</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                          {plan.status}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                      >
                        <span>{selectedPlan === plan.id ? 'Hide Details' : 'View Details'}</span>
                        <svg className={`w-4 h-4 transition-transform ${selectedPlan === plan.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-xl font-bold text-gray-900">${plan.totalAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Remaining Balance</p>
                        <p className="text-xl font-bold text-red-600">${plan.remainingBalance.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Next Payment Due</p>
                        <p className="text-lg font-semibold text-gray-900">{plan.nextDueDate}</p>
                        <p className="text-sm text-orange-600">{plan.daysUntilDue} days remaining</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Progress</p>
                        {getProgressBar(plan.progress.completed, plan.progress.total)}
                      </div>
                    </div>

                    {selectedPlan === plan.id && (
                      <div className="border-t border-gray-200 pt-6 mt-6">
                        {/* Payment Schedule Table */}
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Schedule</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Installment</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {plan.schedule.map((payment) => (
                                <tr key={payment.installment} className="border-b border-gray-100">
                                  <td className="py-3 px-4 font-medium text-gray-900">#{payment.installment}</td>
                                  <td className="py-3 px-4 text-gray-900">${payment.amount.toLocaleString()}</td>
                                  <td className="py-3 px-4 text-gray-900">{payment.dueDate}</td>
                                  <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      payment.status === 'Paid' ? 'text-green-600 bg-green-100' :
                                      payment.status === 'Pending' ? 'text-orange-600 bg-orange-100' :
                                      'text-gray-600 bg-gray-100'
                                    }`}>
                                      {payment.status} {payment.status === 'Paid' ? '✅' : ''}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                            Pay Early
                          </button>
                          <Link href="/chatbot" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Request Adjustment
                          </Link>
                          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                            Contact Support
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'historical' && (
          <div className="space-y-6">
            {historicalPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-gray-900">{plan.planName}</h3>
                    <span className="text-sm text-gray-500">({plan.invoiceRef})</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                      {plan.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="font-medium text-gray-900">{plan.completedDate}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-xl font-bold text-gray-900">${plan.totalAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Progress</p>
                    {getProgressBar(plan.progress.completed, plan.progress.total)}
                  </div>
                  <div className="flex items-center justify-end">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}