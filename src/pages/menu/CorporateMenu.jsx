import React from 'react';

const CorporateMenu = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Corporate Menu</h1>
      <p className="mb-6 text-gray-700">Professional catering solutions for corporate meetings and conferences.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Starter – Sandwiches, Veg Rolls, Mini Cutlets</li>
        <li>Main Course – Veg Fried Rice, Paneer Butter Masala, Dal Tadka</li>
        <li>Desserts – Brownies, Ice Cream, Fruit Salad</li>
        <li>Tea/Coffee Services and Juice Options</li>
      </ul>
    </section>
  );
};

export default CorporateMenu;
