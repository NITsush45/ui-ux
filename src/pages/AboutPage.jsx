import React from "react";
import { motion } from "framer-motion";

const expert = {
  name: "Dr. Alex Morgan",
  title: "Certified Relationship Expert",
  description:
    "With over 15 years of experience in relationship counseling, Dr. Alex Morgan is dedicated to helping individuals and couples build meaningful and lasting connections. Alex’s mission is to provide personalized support and guidance to help clients overcome challenges and achieve happiness in their relationships.",
  image: "/images/mdoc.png",
};

const team = [
  {
    name: "Dr. Emily Carter",
    specialty: "Conflict Resolution Specialist",
    image: "/images/femdoc.jpg",
  },
  {
    name: "John Smith",
    specialty: "Breakup Recovery Coach",
    image: "/images/doc.jpg",
  },
  {
    name: "Sarah Williams",
    specialty: "Patch-Up and Rekindling Expert",
    image: "/images/gdoc.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Dr. Alex Morgan’s guidance completely transformed my relationship. I’ll always be grateful for their help!",
    name: "Sophia L.",
  },
  {
    quote:
      "Emily’s conflict resolution strategies helped us turn our arguments into productive conversations.",
    name: "Mark T.",
  },
  {
    quote:
      "Sarah gave me the tools to rebuild trust with my partner, and we’re happier than ever now.",
    name: "Jessica R.",
  },
  {
    quote: "John helped me move forward after a tough breakup. Life feels brighter now!",
    name: "Daniel W.",
  },
  {
    quote:
      "Thanks to Dr. Alex Morgan, I learned how to communicate better with my partner. Highly recommend!",
    name: "Nina K.",
  },
  {
    quote:
      "Emily’s advice saved our marriage. She is truly a gem in the field of conflict resolution.",
    name: "Karen M.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-10"
      >
        <h1 className="text-4xl font-bold text-pink-600">About Us</h1>
        <p className="text-gray-700 mt-4">
          Learn more about our mission, our experts, and the reviews about our team by our happy clients. 
          we’ve helped create.
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-10">
        <motion.img
          src={expert.image}
          alt={expert.name}
          className="w-60 h-60 object-cover rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-pink-600">{expert.name}</h2>
          <h3 className="text-xl text-gray-700 mt-2">{expert.title}</h3>
          <p className="text-gray-700 mt-4">{expert.description}</p>
        </motion.div>
      </div>
      <div className="bg-pink-50 py-10">
        <motion.h2
          className="text-3xl font-bold text-center text-pink-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="text-center text-gray-600 mt-4">
          Our team of experts is here to guide you every step of the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
              />
              <h3 className="text-2xl font-bold text-pink-600 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-700 mt-2">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-pink-100 py-10">
        <h2 className="text-3xl font-bold text-center text-pink-600">
          Success Stories
        </h2>
        <p className="text-center text-gray-600 mt-4">
          See what our happy clients have to say about the results and our team.
        </p>
        <motion.div
          className="flex gap-4 overflow-x-scroll px-10 mt-8 hide-scrollbar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 min-w-[300px]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <p className="text-pink-600 mt-4 font-bold text-right">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
