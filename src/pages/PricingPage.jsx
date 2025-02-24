import PricingHero from "../components/PricingHero";
import PricingCard from "../components/cards/PricingCard";
import { useEffect } from "react";

const PricingPage = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      description: "Ideal for individuals starting out",
      price: 9.99,
      features: [
        "Stream Unlimited movie",
        "Access to core features",
        "5 GB Storage",
        "Email Support",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      description: "Great for small teams",
      price: 29.99,
      features: [
        "Everything in Basic Plan",
        "50 GB Storage",
        "Priority Email Support",
        "Advanced Reporting",
      ],
    },
    {
      id: 3,
      name: "Pro Plan",
      description: "Perfect for professionals and businesses",
      price: 49.99,
      features: [
        "Everything in Standard Plan",
        "Unlimited Storage",
        "24/7 Phone Support",
        "Customizable Options",
      ],
    },
    {
      id: 4,
      name: "Enterprise Plan",
      description: "For large teams and organizations",
      price: 99.99,
      features: [
        "Dedicated Account Manager",
        "Unlimited Storage",
        "Custom Integrations",
        "Premium Support",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PricingHero />
      <h1 className="text-center text-4xl font-semibold my-4 ">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-8">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  );
};

export default PricingPage;
