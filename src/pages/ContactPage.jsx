import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
    message: "",
    gender: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
      } else {
        setErrorMessage(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-pink-100 to-white min-h-screen py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-pink-600"
          whileHover={{ scale: 1.1, color: "#ec4899" }}
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-700 mt-4">We would love to hear from you!</p>
      </motion.div>
      {successMessage && (
        <motion.p
          className="text-green-500 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {successMessage}
        </motion.p>
      )}
      {errorMessage && (
        <motion.p
          className="text-red-500 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {errorMessage}
        </motion.p>
      )}
      <motion.div
        className="max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <motion.div
            className="mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <label className="block text-gray-700">Gender</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Female</span>
              </label>
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <label htmlFor="problem" className="block text-gray-700">
              Problem
            </label>
            <input
              type="text"
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              rows="5"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg mt-4 hover:bg-pink-700"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-pink-600">Want to know more about us?</h2>
        <motion.div
          className="flex justify-center mt-4 space-x-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-transform transform hover:scale-110"
            whileHover={{ rotate: 360 }}
          >
            <FaFacebook size={40} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition-transform transform hover:scale-110"
            whileHover={{ rotate: 360 }}
          >
            <FaInstagram size={40} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 transition-transform transform hover:scale-110"
            whileHover={{ rotate: 360 }}
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="mailto:contact@example.com"
            className="text-red-600 transition-transform transform hover:scale-110"
            whileHover={{ rotate: 360 }}
          >
            <FaEnvelope size={40} />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
