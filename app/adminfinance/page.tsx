'use client';

import { useMemo, useState } from 'react';

type RiskLevel = 'high' | 'medium';

type ApprovalStatus = 'pending' | 'approved' | 'rejected';

interface ApprovalItem {
  id: string;
  client: string;
  description: string;
  amount: string;
  discount: string;
  risk: RiskLevel;
  status: ApprovalStatus;
}

const initialApprovals: ApprovalItem[] = [
  {
    id: 'REQ-001',
    client: 'Enterprise Solutions',
    description: 'Custom Pricing',
    amount: '$45,000',
    discount: '15% discount',
    risk: 'high',
    status: 'pending',
  },
  {
    id: 'REQ-002',
    client: 'Local Business',
    description: 'Payment Plan',
    amount: '$12,000',
    discount: '5% discount',
    risk: 'medium',
    status: 'pending',
  },
  {
    id: 'REQ-003',
    client: 'Fortune 500',
    description: 'Volume Discount',
    amount: '$85,000',
    discount: '20% discount',
    risk: 'high',
    status: 'approved',
  },
];

export default function AdminFinancePage() {
  const [timeframe, setTimeframe] = useState<'Monthly' | 'Weekly'>('Monthly');
  const [items, setItems] = useState<ApprovalItem[]>(initialApprovals);
  const [activeTab, setActiveTab] = useState<'Overview' | 'Invoices' | 'Payment Plans' | 'Approvals' | 'Client Health'>('Approvals');
  const [invoiceSubtab, setInvoiceSubtab] = useState<'Pending & Overdue' | 'Invoice History'>('Pending & Overdue');
  const [invoiceQuery, setInvoiceQuery] = useState('');

  const pendingCount = useMemo(() => items.filter(i => i.status === 'pending').length, [items]);

  const updateStatus = (id: string, status: ApprovalStatus) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, status } : i)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Finance Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your financial performance and manage cash flow</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as 'Monthly' | 'Weekly')}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm"
            >
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-1 px-2 py-2 overflow-x-auto">
            {(['Overview', 'Invoices', 'Payment Plans', 'Approvals', 'Client Health'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Approvals' && (
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Approval Queue</h2>
              <span className="text-sm text-gray-500">{pendingCount} pending approvals</span>
            </div>
            <div className="px-3 pb-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-xs">
                    <div className="flex items-start justify-between">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <p className="font-medium text-gray-900 truncate">{item.client}</p>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${
                            item.risk === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.risk}
                          </span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${
                            item.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : item.status === 'approved'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">
                          {item.description} • {item.amount} • {item.discount}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Request ID: {item.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.status === 'pending' ? (
                          <>
                            <button
                              onClick={() => updateStatus(item.id, 'rejected')}
                              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-red-50 text-red-700 hover:bg-red-100"
                            >
                              Reject
                            </button>
                            <button
                              onClick={() => updateStatus(item.id, 'approved')}
                              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 hover:bg-green-100"
                            >
                              Approve
                            </button>
                          </>
                        ) : (
                          <span className="text-sm text-gray-500">No action needed</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Client Health' && (
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Client Financial Health Indicators</h2>
              <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18" />
                </svg>
                Generate Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-t border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Client</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">DSO (Days)</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Outstanding Balance</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Payment History</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Health Status</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { client: 'Tech Corp Ltd', dso: 25, balance: '$15,000', history: 95, health: 'healthy' as const },
                    { client: 'StartupXYZ', dso: 45, balance: '$8,500', history: 78, health: 'at risk' as const },
                    { client: 'Global Industries', dso: 35, balance: '$22,000', history: 88, health: 'healthy' as const },
                    { client: 'Innovation Labs', dso: 55, balance: '$28,000', history: 65, health: 'critical' as const },
                  ].map((row) => (
                    <tr key={row.client} className="border-b border-gray-100">
                      <td className="px-6 py-4 text-gray-900 font-medium">{row.client}</td>
                      <td className="px-6 py-4">
                        <span className={`${row.dso <= 30 ? 'text-green-600' : row.dso <= 45 ? 'text-yellow-600' : 'text-red-600'} font-medium`}>{row.dso}</span>
                      </td>
                      <td className="px-6 py-4">{row.balance}</td>
                      <td className="px-6 py-4">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div
                            className={`${row.history >= 90 ? 'bg-green-500' : row.history >= 75 ? 'bg-yellow-500' : 'bg-red-500'} h-2 rounded-full`}
                            style={{ width: `${row.history}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-700 align-middle">{row.history}%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          row.health === 'healthy'
                            ? 'bg-green-50 text-green-700'
                            : row.health === 'at risk'
                            ? 'bg-yellow-50 text-yellow-700'
                            : 'bg-red-50 text-red-700'
                        }`}>
                          {row.health}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-gray-500">
                          <button className="hover:text-gray-700" title="View">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="hover:text-gray-700" title="Assign">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 7a4 4 0 110-8 4 4 0 010 8zm0 0v1a7 7 0 007 7h3" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Invoices' && (
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="px-6 pt-4">
              <div className="flex items-center gap-2">
                {(['Pending & Overdue', 'Invoice History'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setInvoiceSubtab(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${invoiceSubtab === t ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">{invoiceSubtab === 'Pending & Overdue' ? 'Pending & Overdue Invoices' : 'Invoice History'}</h2>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                  <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <input
                    value={invoiceQuery}
                    onChange={(e) => setInvoiceQuery(e.target.value)}
                    className="bg-transparent outline-none text-sm w-64 placeholder:text-gray-500 text-gray-950"
                    placeholder="Search invoice or client"
                  />
                </div>
                {invoiceSubtab === 'Pending & Overdue' && (
                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    New Invoice
                  </button>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-t border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Invoice ID</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Client</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Amount</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Due Date</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Status</th>
                    <th className="text-left text-sm font-medium text-gray-600 px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    invoiceSubtab === 'Pending & Overdue'
                      ? [
                          { id: 'INV-001', client: 'Tech Corp Ltd', amount: '$15,000', due: '2024-09-25', status: 'Pending' as const },
                          { id: 'INV-002', client: 'StartupXYZ', amount: '$8,500', due: '2024-09-15', status: '4 days overdue' as const },
                          { id: 'INV-003', client: 'Global Industries', amount: '$22,000', due: '2024-09-20', status: '1 days overdue' as const },
                          { id: 'INV-004', client: 'Innovation Labs', amount: '$12,000', due: '2024-09-30', status: 'Pending' as const },
                        ]
                      : [
                          { id: 'INV-093', client: 'Fortune 500', amount: '$40,000', due: '2024-08-20', status: 'Paid' as const },
                          { id: 'INV-092', client: 'Acme Corp', amount: '$9,200', due: '2024-08-18', status: 'Paid' as const },
                          { id: 'INV-091', client: 'StartupXYZ', amount: '$6,300', due: '2024-08-10', status: 'Paid' as const },
                        ]
                  )
                    .filter((row) =>
                      invoiceQuery
                        ? row.id.toLowerCase().includes(invoiceQuery.toLowerCase()) ||
                          row.client.toLowerCase().includes(invoiceQuery.toLowerCase())
                        : true
                    )
                    .map((row) => (
                      <tr key={row.id} className="border-b border-gray-100">
                        <td className="px-6 py-4 font-semibold text-gray-900">{row.id}</td>
                        <td className="px-6 py-4 text-gray-800">{row.client}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{row.amount}</td>
                        <td className="px-6 py-4 text-gray-800">{row.due}</td>
                        <td className="px-6 py-4">
                          {row.status === 'Pending' ? (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Pending</span>
                          ) : row.status === 'Paid' ? (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Paid</span>
                          ) : (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">{row.status}</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 text-gray-500">
                            <button className="hover:text-gray-700" title="View">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="hover:text-gray-700" title="Edit">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h2m-1 0v14m7-7H5" />
                              </svg>
                            </button>
                            {invoiceSubtab === 'Pending & Overdue' && (
                              <button className="hover:text-gray-700" title="Remind">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="h-10" />
    </div>
  );
}
