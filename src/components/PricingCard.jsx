import PropTypes from "prop-types";

const PricingCard = ({ plan }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      {/* Card Header */}
      <div className="card-body text-center">
        <h2 className="card-title text-2xl font-bold text-primary">
          {plan.name}
        </h2>
        <p className="text-gray-500 text-sm">{plan.description}</p>

        {/* Pricing */}
        <div className="my-4">
          <span className="text-4xl font-bold text-secondary">
            ${plan.price}
          </span>
          <span className="text-gray-500 text-sm">/month</span>
        </div>

        {/* Features List */}
        <ul className="mb-4 space-y-2 text-gray-600 text-sm">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <button className="btn btn-primary w-full">Choose Plan</button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.object,
};

export default PricingCard;
