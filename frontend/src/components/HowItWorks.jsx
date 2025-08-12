import React from "react";
import { Atom, Edit3, Share2 } from "lucide-react";

const steps = [
  {
    icon: <Atom className="w-10 h-10 text-black" />,
    title: "Write prompt for your form",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <Edit3 className="w-10 h-10 text-black" />,
    title: "Edit Your form",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-black" />,
    title: "Share & Start Accepting Responses",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">How it Works?</h2>
        <p className="text-gray-600 mb-12">
          Give mock interview in just 3 simple easy steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
