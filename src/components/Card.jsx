import React from 'react';

const Card = ({ nama, jabatan, foto }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-auto">
      {/* Foto Aparat */}
      <div className="bg-gray-200 h-48">
        <img
          className="h-full w-full object-cover"
          src={foto}
          alt={`Foto ${nama}`}
        />
      </div>

      {/* Konten Card */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 text-center">{nama}</h2>
        <p className="text-gray-600 text-center">{jabatan}</p>
      </div>
    </div>
  );
};

export default Card;
