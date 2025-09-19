"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Canvax Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response with more variety
    setTimeout(() => {
      const responses = [
        "Great! I can help you configure a custom Canvax plan. To start, how many team members are you looking to onboard?",
        "I understand you're interested in our Enterprise plan. What specific features are you most interested in?",
        "Perfect! For a team of that size, I'd recommend our Pro plan which includes premium templates and priority support. Would you like me to walk you through the features?",
        "Excellent! I can help you with that. Let me provide you with some detailed information about our pricing options.",
        "That's a great question! I'm here to help you find the perfect Canvax solution for your team's needs. What's your main use case?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 flex-shrink-0 sticky top-0 z-50">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Far Left */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Canvax
                </span>
              </Link>
            </div>
            
            {/* Navigation Items - Far Right */}
            <div className="flex items-center space-x-2">
              <Link 
                href="/"
                className="text-gray-600 hover:text-green-600 hover:bg-green-50 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Back to Pricing</span>
                </span>
              </Link>
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
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
        <div className="w-1/4 bg-gradient-to-br from-green-600 to-green-800 px-8 py-8 overflow-y-auto">
          <div className="max-w-sm">
            <h1 className="text-3xl font-bold mb-6 text-white">
              Talk to our AI Assistant
            </h1>
            <p className="text-lg text-green-100 mb-8">
              We're happy to answer questions and get you acquainted with Canvax.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-700 bg-opacity-50 rounded-lg p-5">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-xl">💳</div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">Payment Management</h3>
                    <div className="space-y-2 text-green-100 text-xs">
                      <p><strong>Split & Schedule Payments:</strong> Instantly create installment plans.</p>
                      <p><strong>Auto-Generated Links:</strong> Secure Stripe/PayPal links for each payment.</p>
                      <p><strong>Client Input Handling:</strong> Adjust based on what the client can actually pay.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-700 bg-opacity-50 rounded-lg p-5">
                <div className="flex items-start space-x-3">
                  <div className="text-xl">📑</div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">Contract Compliance</h3>
                    <div className="space-y-2 text-green-100 text-xs">
                      <p><strong>Policy Check:</strong> AI ensures adjustments respect your contracts.</p>
                      <p><strong>Risk Flags:</strong> Highlights concessions that may cause legal/financial issues.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-700 bg-opacity-50 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-green-200">For technical issues and product questions, please visit our</span>
              </div>
              <a href="#" className="text-blue-300 hover:text-blue-200 underline font-medium text-sm">
                Help Center
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Chat Interface */}
        <div className="w-3/4 bg-gray-100 flex flex-col p-6">
          <div className="bg-white rounded-lg shadow-lg flex flex-col h-full">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 flex-shrink-0 rounded-t-lg">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-green-600 font-bold text-lg">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-300 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-white">Assistant</h1>
                <p className="text-green-100 text-sm">Your AI-powered assistant for all things Canvax</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-green-100 text-sm font-medium">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div className={`flex items-start space-x-3 max-w-2xl ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                    message.isBot ? "bg-green-500" : "bg-blue-500"
                  }`}>
                    <span className="text-white text-sm font-bold">
                      {message.isBot ? "A" : "U"}
                    </span>
                  </div>
                  <div className={`px-5 py-4 rounded-2xl shadow-md max-w-lg ${
                    message.isBot 
                      ? "bg-white text-gray-800 border border-gray-100" 
                      : "bg-blue-500 text-white"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-3 ${message.isBot ? "text-gray-500" : "text-blue-100"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-2xl">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div className="bg-white px-5 py-4 rounded-2xl border border-gray-100 shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white px-6 py-4 flex-shrink-0 rounded-b-lg">
            <div className="flex items-end space-x-4">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm"
                  rows={1}
                  style={{ minHeight: "48px", maxHeight: "120px" }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-3 bottom-3 p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors duration-200 shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}