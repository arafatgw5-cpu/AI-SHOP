import React, { useEffect, useState } from 'react';

const Models = ({ modalPromise }) => {
  const [modals, setModals] = useState([]);

  useEffect(() => {
    modalPromise.then(data => {
      setModals(data);
    });
  }, [modalPromise]);

  console.log(modals);

  return (
<div className="bg-gray-50 min-h-screen py-12">
  <div className="max-w-6xl mx-auto px-6">
  
    <p className="text-center text-gray-500 text-2xl font-medium mb-16">
      One subscription gives you access to all frontier AI models
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {modals.map((modal) => (
        <div
          key={modal.id}
          className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100"
        >
    
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

            {/* Badge */}
            <div
              className={`absolute top-8 right-8 px-5 py-1 text-xs font-bold rounded-3xl text-white ${modal.badgeColor}`}
            >
              {modal.badge}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">{modal.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-10 text-base">
              {modal.description}
            </p>

            {/* Price */}
            <div className="mb-10">
              {modal.isFree ? (
                <span className="text-4xl font-bold text-emerald-500">Free</span>
              ) : (
                <>
                  <span className="text-4xl font-bold text-gray-900">${modal.price}</span>
                  <span className="text-gray-500 text-lg ml-1">/month</span>
                </>
              )}
            </div>

            {/* Red button exactly like screenshot */}
            <button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-2xl transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Models;