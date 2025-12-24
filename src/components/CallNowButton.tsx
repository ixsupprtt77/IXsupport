import React from "react";

const PHONE_NUMBER = "tel:8889296191";

export function CallNowButton({ className = "", style = {}, sticky = false }) {
  return (
    <a
      href={PHONE_NUMBER}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${sticky ? "fixed bottom-6 right-6 z-50" : ""} ${className}`}
      style={style}
      aria-label="Call Now"
    >
      <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-3.375a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.094.21l-2.25 1.8a12.042 12.042 0 0 1-5.25-5.25l1.8-2.25a1.125 1.125 0 0 0 .21-1.094c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 5.25 2.25H1.875A1.125 1.125 0 0 0 .75 3.375c0 8.284 6.716 15 15 15z" />
        </svg>
      </span>
      <span className="ml-2 font-bold tracking-wide">(888) 929-6191</span>
      <span className="ml-4 px-4 py-2 rounded bg-white text-blue-700 font-bold shadow hover:bg-blue-50 transition-all">Call Now</span>
    </a>
  );
}

export default CallNowButton;
