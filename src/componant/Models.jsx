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
<div className="min-h-screen bg-slate-950 text-white">
  {/* Header Section (unchanged) */}
  <div className="text-center relative overflow-hidden py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <div className="absolute inset-0 bg-[radial-gradient(at_center,#a855f710_0%,transparent_70%)]"></div>

    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-2 text-sm font-medium text-white/80 mb-8 tracking-widest">
        ✨ ONE SUBSCRIPTION • ALL MODELS
      </div>

      <h2 className="text-7xl md:text-8xl font-black leading-none bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tighter">
        Choose Your<br />AI Model
      </h2>

      <p className="text-2xl md:text-3xl text-white/70 mt-8 max-w-2xl mx-auto font-light">
        One subscription gives you access to <span className="font-semibold text-white">all frontier AI models</span>
      </p>

      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-10 rounded-full"></div>
    </div>
  </div>

  {/* Models Section - Image এখন সুন্দর Padding সহ */}
  <div className="max-w-7xl mx-auto px-6 pb-20">
    <div className="grid md:grid-cols-3 gap-8">
      {modals.map((modal) => (
        <div
          key={modal.id}
          className="group relative bg-slate-900/80 border border-white/10 hover:border-purple-500/50 backdrop-blur-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Card Image - এখন সুন্দর Padding + Rounded + Better Look */}
          <div className="p-6 pb-0">   {/* ← এখানে padding দিয়েছি (valo kore) */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 shadow-inner">
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
              
              {/* Model badge */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-xs font-bold px-4 py-1.5 rounded-2xl border border-white/20">
                {modal.badge}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 pt-6">
            <h1 className="text-3xl font-bold mb-3 tracking-tight">{modal.title}</h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-3">
              {modal.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-white">{modal.price}</span>
              <span className="text-slate-400 text-lg">/month</span>
            </div>

            {/* Subscribe Button */}
            <button
              className="w-full py-5 rounded-2xl font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all active:scale-95 shadow-xl shadow-purple-500/30 flex items-center justify-center gap-3 group"
            >
              Subscribe Now
              <span className="text-xl transition-transform group-active:rotate-12">→</span>
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