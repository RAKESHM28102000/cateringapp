import React from 'react';

const DessertsDrinks = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Desserts & Drinks</h1>
      <p className="mb-6 text-gray-700">Sweeten your events with our range of heavenly desserts and refreshing drinks.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Desserts – Ice Creams, Gulab Jamun, Rasgulla, Brownies, Cakes</li>
        <li>Fruit Trays – Seasonal Fruits and Carving Platters</li>
        <li>Drinks – Fresh Juices, Mocktails, Milkshakes, Cold Coffee</li>
      </ul>
    </section>
  );
};

export default DessertsDrinks;
