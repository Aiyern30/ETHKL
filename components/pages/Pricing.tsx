"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Free Plan",
    price: "$0 ",
    features: ["✓ 3 Sessions Per Week", "〤 Free Forever"],
  },
  {
    title: "Paid Plan",
    price: "$10 ",
    features: ["✓ Unlimited Sessions", "〤 Priority Support"],
  },
  {
    title: "Pro Plan",
    price: "$20 ",
    features: [
      "✓ Unlimited Sessions",
      "✓ Priority Support",
      "✓ Advanced Features",
    ],
  },
];

// Framer Motion variants for animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const PricingCard = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="border border-black p-4 sm:p-6 md:p-9 text-black flex flex-col gap-4 sm:gap-6 md:gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold"
      >
        Pricings
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Choose a plan that's right for you
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-transparent border-0">
              <CardHeader className="font-bold text-lg sm:text-xl mb-2">
                {plan.title}
                <CardDescription className="">
                  Ideal for individuals who need access to basic features
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="text-black text-base sm:text-lg"
                >
                  <span className="text-3xl font-bold">{plan.price}</span>
                  /month
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="relative"
                >
                  <button className="border-2 border-black w-full h-10 rounded hover:bg-[#FFE042] mt-4 text-left pl-5">
                    Get Started
                  </button>
                  <GrFormNextLink
                    size={30}
                    className="absolute top-5 right-5 hidden sm:block"
                  />
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="list-none mt-4 space-y-3"
                >
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-black ">
                      {feature}
                    </li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingCard;
