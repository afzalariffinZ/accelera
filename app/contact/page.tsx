'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    role: '',
    country: 'Malaysia',
    company: '',
    companySize: '',
    phoneNumber: '',
    helpWith: '',
    additionalInfo: '',
    marketingConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // After 10 seconds, mark as submitted and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Redirect to hub after showing success briefly
      setTimeout(() => {
        router.push('/hub');
      }, 1500);
    }, 10000);
  };

  // Render pending state
  if (isSubmitting) {
    return (
      <div className="h-screen flex flex-col bg-gradient-to-br from-purple-50 to-purple-100">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 flex-shrink-0 sticky top-0 z-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    Canvax
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Pending Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-12 h-12 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing your request...</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're submitting your information to our sales team. This will just take a moment.
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render success state
  if (isSubmitted) {
    return (
      <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 flex-shrink-0 sticky top-0 z-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    Canvax
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Success Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your request has been submitted successfully. Our sales team will contact you soon.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting you to our AI Assistant...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 flex-shrink-0 sticky top-0 z-50">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Far Left */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Canvax
                </span>
              </Link>
            </div>
            
            {/* Navigation Items - Far Right */}
            <div className="flex items-center space-x-2">
              <Link 
                href="/"
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Back to Pricing</span>
                </span>
              </Link>
              <Link 
                href="/chatbot"
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>AI Assistant</span>
              </Link>
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Content */}
        <div className="w-1/2 bg-gradient-to-br from-purple-700 to-purple-900 px-12 py-8 overflow-y-auto">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6 text-white">
              Contact our sales team
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              We're happy to answer questions and get you acquainted with Canvax.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Schedule a demo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Get pricing information</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Explore use cases for your team</span>
              </div>
            </div>

            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-purple-200">For technical issues and product questions, please visit our</span>
              </div>
              <a href="#" className="text-blue-300 hover:text-blue-200 underline font-medium">
                Help Center
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col p-8">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-full overflow-y-auto border border-gray-100">
            <div className="p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>
                </div>

                {/* Email and Role */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-semibold text-gray-700 mb-3">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-3">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Please select one</option>
                      <option value="ceo">CEO</option>
                      <option value="cto">CTO</option>
                      <option value="manager">Manager</option>
                      <option value="developer">Developer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-3">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                  >
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Company and Size */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-semibold text-gray-700 mb-3">
                      Company size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Please select one</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                {/* Phone and Help */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="helpWith" className="block text-sm font-semibold text-gray-700 mb-3">
                      How can our sales team help you? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="helpWith"
                      name="helpWith"
                      value={formData.helpWith}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Please select one</option>
                      <option value="demo">Schedule a demo</option>
                      <option value="pricing">Get pricing information</option>
                      <option value="integration">Integration questions</option>
                      <option value="features">Feature questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-3">
                    Anything else? <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="What challenges are you looking to overcome with Canvax?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="text-xs text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  By registering, you confirm that you agree to the processing of your personal data by Salesforce as described in the{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 underline font-medium">Privacy Statement</a>.
                </div>

                {/* Marketing Consent */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <input
                    type="checkbox"
                    id="marketingConsent"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded-lg focus:ring-purple-500 focus:ring-2"
                  />
                  <label htmlFor="marketingConsent" className="text-xs text-gray-600 leading-relaxed">
                    Yes, I would like to receive marketing communications about the Salesforce family of companies, products, services, and events. I can unsubscribe at any time.
                  </label>
                </div>

                <div className="text-xs text-gray-500 text-center py-2">
                  Fields marked with an asterisk (*) are required.
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <span>SUBMIT</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}