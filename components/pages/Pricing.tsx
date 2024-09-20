import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui";
import { GrFormNextLink } from "react-icons/gr";

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

function PricingCard() {
  return (
    <section className="border border-black p-4 sm:p-6 md:p-9 text-black flex flex-col gap-4 sm:gap-6 md:gap-8">
      <div className="text-3xl font-bold">Pricings</div>
      <div>Choose a plan that's right for you</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <Card key={index} className="bg-transparent border-0 ">
            <CardHeader className="font-bold text-lg sm:text-xl mb-2">
              {plan.title}
              <CardDescription className="">
                Ideal for individuals who need access to basic features
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <p className="text-black text-base sm:text-lg">
                <span className="text-3xl font-bold">{plan.price}</span>
                /month
              </p>
              <div className="relative">
                <button className="border-2 border-black  w-full h-10 rounded hover:bg-[#FFE042] mt-4 text-left pl-5">
                  Get Started
                </button>
                <GrFormNextLink
                  size={30}
                  className="absolute top-5 right-5 hidden sm:block"
                />
              </div>
              <ul className="list-none mt-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-black ">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default PricingCard;
