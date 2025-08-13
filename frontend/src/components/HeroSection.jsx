import React from "react";
import { ArrowRight } from "lucide-react";
import HowItWorks from "./HowItWorks";
import FeaturesSection from "./FeaturesSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="bg-white flex flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center space-x-2 mb-4 bg-slate-100 px-1.5 py-1.5 rounded-full mt-30">
          <span className="bg-blue-200 text-blue-500 text-xs font-semibold px-3 py-1.5 rounded-full">
            New
          </span>
          <a
            href="https://myreactportfolio-7jn7.vercel.app/"
            className="text-gray-500 text-sm hover:underline flex items-center"
          >
            My React Portfolio
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Build Your Resume <span className="text-blue-500">With AI</span>
        </h1>
        <p className="text-gray-500 text-lg mb-6 max-w-2xl">
          Effortlessly Craft a Standout Resume with Our AI-Powered Builder
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to={'/auth/sign-in'}>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          </Link>
          <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch video
          </button>
        </div>

        {/* Featured In */}
        <p className="text-gray-400 text-sm mt-6">FEATURED IN</p>
        <div className="flex gap-8 justify-center items-center">
          <img src="https://resume.io/assets/landing/home/logos/accenture-7631e3f286d31d8d1501e1b57f83f971a9e3de57dc5accabd42da7c335e226e5.svg" alt="YouTube" className="h-20" />
          <img src="https://resume.io/assets/landing/home/logos/kpmg-4ab997f446cf46aacd1936a6bca7062cdf36b9049c5c9e4069205749a9671f1c.svg" alt="Product Hunt" className="h-20" />
          <img src="https://resume.io/assets/landing/home/logos/amazon-a4c379a16fdf0e5fca12561ca7369884042b3992a0ac45c77f161504d0a26fe5.svg" alt="Reddit" className="h-20" />
        </div>

        <HowItWorks />
        
        <Link to={'/auth/sign-in'}>
        <button className="bg-red-500 text-white px-6 py-3 mb-5 rounded-lg flex items-center justify-center hover:bg-red-700 cursor-pointer">
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </Link>
        
        <FeaturesSection/>

      </div>
    </>
  );
}
