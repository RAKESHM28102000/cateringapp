import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-md transition duration-300 hover:bg-yellow-600 z-50 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
