import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Relationship Advice",
    description:
      "Get personalized advice to navigate challenges in your relationships. Let us guide you towards a stronger and happier bond.",
    image: "/images/rel.jpg",
  },
  {
    title: "Breakup Solutions",
    description:
      "Healing from a breakup? We offer support to help you recover and move forward with confidence.",
    image: "/images/break.jpg",
  },
  {
    title: "Patch-Up Services",
    description:
      "Want to rekindle an old flame? Our experts can help you rebuild and restore meaningful connections.",
    image: "/images/patch.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Thanks to the expert advice, my partner and I were able to resolve our conflicts and grow closer than ever!",
    name: "Emily R.",
  },
  {
    quote:
      "After my breakup, I felt lost. The guidance I received helped me heal and rediscover myself.",
    name: "John D.",
  },
  {
    quote:
      "The patch-up services really worked wonders for my relationship!",
    name: "Ross",
  },
  {
    quote:
      "I can't thank the team enough for their support during a tough time.",
    name: "Jim Tailor",
  },
  {
    quote:
      "Their relationship advice was a game changer for me and my partner.",
    name: "Griffin",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen">
      <motion.div
        className="text-center py-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-pink-600">Our Services</h1>
        <p className="text-gray-700 mt-4">
          Explore our range of personalized services tailored to your needs.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:rotate-2 hover:shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-pink-600">
                {service.title}
              </h2>
              <p className="text-gray-700 mt-4">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="bg-pink-50 py-10 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center text-pink-600">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Hear from our happy clients about their experiences.
        </p>
        <motion.div
          className="flex gap-4 overflow-x-scroll px-10 mt-8 hide-scrollbar"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 min-w-[300px] transform transition duration-300 hover:-rotate-1 hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <p className="text-pink-600 mt-4 font-bold text-right">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;