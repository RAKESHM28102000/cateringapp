import React from 'react';

const PartySpecials = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Party Specials</h1>
      <p className="mb-6 text-gray-700">Spice up your parties with our tasty and innovative party specials.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Live Counters – Pasta Station, Chaat Corner, Dosa Stall</li>
        <li>BBQ Grills – Veg/Non-Veg options</li>
        <li>Snacks & Finger Foods – Nachos, Kathi Rolls, Sliders</li>
        <li>Mocktails & Signature Drinks</li>
      </ul>
    </section>
  );
};

export default PartySpecials;
