import React from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Tips for Building Stronger Relationships",
      excerpt: "Discover practical advice to strengthen your relationships.",
      link: "https://www.powerofpositivity.com/make-relationships-stronger-things/",
    },
    {
      title: "How to Resolve Conflicts Effectively",
      excerpt: "Learn strategies to resolve conflicts and improve communication.",
      link: "https://www.psychologytoday.com/us/blog/close-encounters/201704/10-tips-solving-relationship-conflicts?msockid=0bca9f90d66267e425fc8aa6d79066ce",
    },
    {
      title: "The Importance of Self-Love in Relationships",
      excerpt: "Understand why self-love is crucial for healthy relationships.",
      link: "https://relationshipsmag.com/the-importance-of-self-love-in-healthy-relationships/",
    },
    {
      title: "5 Communication Skills to Master",
      excerpt: "Improve your communication to foster better connections.",
      link: "https://writeharbor.com/2024/09/10/effective-communication-skills-to-master-for-personal-and-professional-growth/",
    },
    {
      title: "Overcoming Challenges in Long-Distance Relationships",
      excerpt: "Explore tips to make long-distance relationships work.",
      link: "https://meziesblog.com/how-to-overcome-challenges-in-long-distance-relationships/",
    },
    {
      title: "How to Rebuild Trust in a Relationship",
      excerpt: "Learn the steps to rebuild trust after a conflict.",
      link: "https://counselingnow.com/10-proven-strategies-to-rebuild-trust-in-a-relationship-expert-advice-and-real-life-success-stories/",
    },
    {
      title: "Understanding Love Languages",
      excerpt: "Discover the five love languages and how to use them.",
      link: "https://amazingmemovement.com/understanding-love-languages/",
    },
    {
      title: "Self-Care Tips for a Healthier Relationship",
      excerpt: "Prioritize self-care to improve your connection with others.",
      link: "https://www.marriage.com/advice/relationship/relationship-self-care-tips/#:~:text=7%20tips%20for%20practicing%20self-care%20in%20your%20relationships,...%207%207.%20Practice%20gratitude%20and%20appreciation%20",
    },
    {
      title: "Breaking Up Amicably: A Guide",
      excerpt: "Learn how to end a relationship with mutual respect and understanding.",
      link: "https://markmanson.net/how-to-break-up-with-someone",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white py-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-pink-600">Blog</h1>
        <p className="text-gray-700 mt-4">
          Explore our latest articles on relationships and self-improvement
        </p>
      </motion.div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-pink-700">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-pink-600 mt-4 inline-block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;