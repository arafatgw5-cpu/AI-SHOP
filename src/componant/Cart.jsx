import React from 'react';

const Cart = ({ carts }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

      {carts.length === 0 ? (
        <p>No items added</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {carts.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow flex gap-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-32 h-32 object-cover rounded" 
              />
              <div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-semibold mt-2">Price: ${item.price}</p>
                <p className="text-sm text-purple-700 mt-1">Status: {item.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;