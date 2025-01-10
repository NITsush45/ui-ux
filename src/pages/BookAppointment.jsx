import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Relationship Advice",
    time: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", { ...formData, date: selectedDate });
    alert("Your consultation has been successfully booked!");
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-pink-100 to-white min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-pink-600 mt-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Book Your Consultation
      </motion.h1>
      <motion.p
        className="text-gray-700 mt-2 mb-8"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Select your preferred date, time, and service to schedule your
        consultation.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="shadow-lg rounded-lg p-6 bg-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-pink-600 mb-4">
            Choose a Date
          </h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg"
          />
          <p className="text-gray-600 mt-4">
            Selected Date:{" "}
            <span className="text-pink-600 font-medium">
              {selectedDate.toDateString()}
            </span>
          </p>
        </motion.div>

        <motion.div
          className="shadow-lg rounded-lg p-6 bg-white w-full max-w-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-pink-600 mb-4">
            Booking Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                  className="transform transition duration-300 hover:scale-110"
                />
                <label className="text-gray-600 ml-2">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                  className="transform transition duration-300 hover:scale-110"
                />
                <label className="text-gray-600 ml-2">Female</label>
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
              >
                <option>Relationship Advice</option>
                <option>Breakup Solutions</option>
                <option>Patch-Up Services</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg mt-4"
            >
              Book Consultation
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
