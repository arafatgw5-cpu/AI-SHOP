import React, { useState } from 'react';

const ModalCard = ({ modal, carts, setCarts }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    const alreadyExist = carts.find(item => item.id === modal.id);

    if (!alreadyExist) {
      setSubscribed(true);
      setCarts([...carts, modal]);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">

        <div className="p-10 bg-gray-100 relative">
          <div
            className="w-28 h-28 mx-auto rounded-2xl flex items-center justify-center shadow-inner"
            style={{ backgroundColor: modal.logoBg }}
          >
            <img
              src={modal.image}
              alt={modal.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className={`absolute top-8 right-8 px-5 py-1 text-xs font-bold rounded-3xl text-white ${modal.badgeColor}`}>
            {modal.badge}
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            {modal.title}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-10 text-base">
            {modal.description}
          </p>

          <div className="mb-10">
            {modal.isFree ? (
              <span className="text-4xl font-bold text-emerald-500">Free</span>
            ) : (
              <>
                <span className="text-4xl font-bold text-gray-900">
                  ${modal.price}
                </span>
                <span className="text-gray-500 text-lg ml-1">/month</span>
              </>
            )}
          </div>

          <button
            onClick={handleSubscription}
            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-2xl transition-colors"
          >
            {subscribed ? "Subscribed ✅" : "Subscribe Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalCard;