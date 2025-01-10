import React from "react";
import { motion } from "framer-motion";

const FAQPage = () => {
  const faqs = [
    {
      question: "How does the consultation process work?",
      answer:
        "You can book an appointment online, and our experts will guide you through the process based on your concerns.",
    },
    {
      question: "What is the cost of a consultation?",
      answer:
        "Consultation fees depend on the type of service. Contact us for specific details.",
    },
    {
      question: "Are the consultations confidential?",
      answer: "Yes, all consultations are 100% confidential and secure.",
    },
    {
      question: "How long does each consultation last?",
      answer: "Each session typically lasts between 30 to 60 minutes.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, you can reschedule your appointment by contacting our support team at least 24 hours in advance.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer both in-person and virtual consultations.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10"
      role="main"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1
          className="text-4xl font-bold text-blue-600"
          aria-level="1"
        >
          FAQs
        </h1>
        <p className="text-gray-700 mt-4" role="note">
          Find answers to commonly asked questions
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="mb-6 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all"
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <motion.h3
              id={`faq-question-${index}`}
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              className="text-xl font-semibold text-blue-700 cursor-pointer"
              tabIndex="0"
            >
              {faq.question}
            </motion.h3>
            <motion.p
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 mt-2 overflow-hidden"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQPage;
