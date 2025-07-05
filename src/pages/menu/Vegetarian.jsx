import React from 'react';

const Vegetarian = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Vegetarian Menu</h1>
      <p className="mb-6 text-gray-700">Delicious vegetarian dishes that please every palate.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Starters – Veg Pakora, Corn Cheese Balls</li>
        <li>Main Course – Veg Biryani, Paneer Butter Masala, Mixed Veg Curry</li>
        <li>South Indian – Idli, Dosa, Sambar, Pongal</li>
        <li>Desserts – Halwa, Ice Cream, Kheer</li>
      </ul>
    </section>
  );
};

export default Vegetarian;
