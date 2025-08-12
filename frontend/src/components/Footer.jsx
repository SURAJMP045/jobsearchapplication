import React from "react";
import { Linkedin, Youtube, Image as PinterestIcon, Instagram, Facebook, Music2, Disc } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Social Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Connect with us on social media</h4>
          <div className="flex flex-wrap gap-3">
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={PinterestIcon} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Music2} />
            <SocialIcon Icon={Disc} />
          </div>
        </div>

        {/* Job Seekers */}
        <FooterColumn
          title="JOB SEEKERS"
          links={[
            "Create a resume",
            "Resume examples",
            "Resume templates",
            "Cover Letter Templates",
            "Job Search",
          ]}
        />

        {/* Career Resources */}
        <FooterColumn
          title="CAREER RESOURCES"
          links={[
            "Resume Help",
            "Job Interview",
            "Career",
            "Cover Letter",
            "Blog",
          ]}
        />

        {/* Our Company */}
        <FooterColumn
          title="OUR COMPANY"
          links={[
            "About Us",
            "Updates",
            "Pricing",
            "Sponsorship Program",
            "Media Kit",
            "Affiliates",
          ]}
        />

        {/* Support */}
        <FooterColumn
          title="SUPPORT"
          links={[
            "FAQ",
            "Contact Us",
            "Terms of Service",
            "Privacy",
            "Right of Withdrawal",
            "Do not sell, do not share",
            "Your privacy choices",
          ]}
        />
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
          <span>International</span>
        </div>
        <p>Copyright 2025 - Resume.io</p>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <div className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
    <Icon className="text-white w-5 h-5" />
  </div>
);

// Footer Column Component
const FooterColumn = ({ title, links }) => (
  <div>
    <h5 className="text-gray-400 font-semibold text-sm mb-4">{title}</h5>
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="hover:underline hover:text-white text-sm">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
