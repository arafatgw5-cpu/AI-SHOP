import React, { useEffect, useState } from 'react';
import ModalCard from './ModalCard';

const Models = ({ modalPromise, carts, setCarts }) => {
  const [modals, setModals] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await modalPromise;
        setModals(data);
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    loadData();
  }, [modalPromise]);

  if (modals.length === 0) {
    return <h2 className="text-center text-2xl">Loading...</h2>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 mt-2">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-3">
          Choose Your AI Model
        </h2>

        <p className="text-center text-gray-500 text-2xl font-medium mb-16">
          One subscription gives you access to all frontier AI models
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {modals.map((modal) => (
            <ModalCard
              key={modal.id}
              modal={modal}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;