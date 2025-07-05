import React from 'react';

const BirthdayMenu = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Birthday Menu</h1>
      <p className="mb-6 text-gray-700">Fun-filled and tasty dishes perfect for kids and adults alike!</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Snacks – French Fries, Cheese Balls, Popcorn</li>
        <li>Main Dishes – Veg/Chicken Pizza, Mini Burgers, Fried Rice</li>
        <li>Desserts – Cupcakes, Ice Cream, Chocolate Fountain</li>
        <li>Beverages – Soft Drinks, Milkshakes, Mocktails</li>
      </ul>
    </section>
  );
};

export default BirthdayMenu;
