import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen font-poppins">
      <section className="flex flex-col items-center text-center py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 leading-tight"
          >
            We Value You, We Value Your Relations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Find the clarity, guidance, and support you need to build stronger
            connections and resolve relationship challenges. Let our experts
            help you today!
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
            className="flex justify-center gap-4"
          >
            <Link to="/book">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
              >
                Book your Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white py-12 px-4 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Our Consultation Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Relationship Advice",
              description:
                "Get personalized guidance to navigate your relationship challenges and build stronger connections.",
              icon: "💬",
            },
            {
              title: "Breakup Solutions",
              description:
                "Find clarity and healing with solutions designed to help you move forward after a breakup.",
              icon: "💔",
            },
            {
              title: "Patch-Up Services",
              description:
                "Reignite the spark and reconnect with your partner through our tailored patch-up solutions.",
              icon: "❤️",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col items-center text-center bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <motion.div
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
