import React from 'react';

const WeddingMenu = () => {
  return (
    <section className="p-8 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">Wedding Menu</h1>
      <p className="mb-6 text-gray-700">Our grand wedding menu is crafted to celebrate your special day with elegance and flavor.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Welcome Drinks – Rose Milk, Fresh Lime, Badam Milk</li>
        <li>Starters – Paneer Tikka, Vegetable Spring Rolls, Mini Samosas</li>
        <li>Main Course – Biryani, Mixed Vegetable Curry, Butter Naan, Rasam, Curd Rice</li>
        <li>Desserts – Gulab Jamun, Ice Cream, Fruit Custard</li>
      </ul>
    </section>
  );
};

export default WeddingMenu;
