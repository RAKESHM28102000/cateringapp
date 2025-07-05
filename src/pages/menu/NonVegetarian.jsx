import React from 'react';

const NonVegetarian = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Non-Vegetarian Menu</h1>
      <p className="mb-6 text-gray-700">A hearty feast for meat-lovers with bold and authentic flavors.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Starters – Chicken Lollipop, Mutton Kebab, Fish Fingers</li>
        <li>Main Course – Chicken Biryani, Mutton Curry, Egg Masala</li>
        <li>Side Dishes – Butter Naan, Parotta, Chicken 65</li>
        <li>Desserts – Ice Cream, Fruit Salad</li>
      </ul>
    </section>
  );
};

export default NonVegetarian;
