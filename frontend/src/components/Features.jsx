import React from "react";
import { Briefcase, Smile, FileText, Rocket, Check, Lamp } from "lucide-react";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Rocket className="text-orange-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Build or update your resume in minutes
          </h3>
          <p className="text-gray-600 text-sm">
            Create or improve your resume with our powerful AI Resume Builder.
            Convert your resume into a free{" "}
            <a
              href="https://bold.pro"
              className="text-blue-600 underline font-medium"
            >
              Bold.pro
            </a>{" "}
            online profile to elevate your digital presence and grow your
            network.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Smile className="text-yellow-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Choose from 40+ ATS-friendly templates
          </h3>
          <p className="text-gray-600 text-sm">
            Pick an ATS-friendly template and customize it to match your style.
            You can{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              use our Resume Builder for free
            </a>{" "}
            to create your resume and download it in plain text format.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="text-blue-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Add professional content suggestions
          </h3>
          <p className="text-gray-600 text-sm">
            Overcome writer’s block with job-specific content suggestions
            written by professional resume analysts. Simply click or tap to add
            skills, work experience bullet points, and more.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Check className="text-yellow-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Scan your resume for ATS compatibility
          </h3>
          <p className="text-gray-600 text-sm">
            Use our mobile-friendly{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              {" "}
              ATS Resume Checker{" "}
            </a>{" "}
            to analyze your resume for 30+ issues. Click or tap to implement
            expert-recommended fixes and improve your resume score.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Lamp className="text-blue-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Get inspired by professionally made samples
          </h3>
          <p className="text-gray-600 text-sm">
            Browse{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              resume examples{" "}
            </a>{" "}
            for your job title or industry and personalize them in our Resume
            Builder with expert tips, tailored content suggestions, and easy
            editing tools.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Briefcase className="text-orange-500 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Outperform the competition with expert help
          </h3>
          <p className="text-gray-600 text-sm">
            Visit our{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              career center{" "}
            </a>{" "}
            {""} for job search and career development guidance, or watch our
            expert-led webinars on key topics from networking to salary
            negotiation.
          </p>
        </div>
      </div>
      <div className="flex items-center text-center justify-center mt-15">
        <Link to={'/auth/sign-in'}>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center text-center justify-center hover:bg-teal-700 cursor-pointer">
          Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        </Link>
      </div>
    </>
  );
};

export default Features;
