import React from "react";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-slate-900 text-2xl" />
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
