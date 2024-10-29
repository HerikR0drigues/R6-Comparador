// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className='bg-backgroundPurple border-t border-gray-200 mt-auto'>
        <div className='text-center max-w-5xl mx-auto px-4 py-4 text-white'>
          Comparador de kills por ranked Rainbow Six Siege &copy; {new Date().getFullYear()} Herik.Dev
        </div>
    </footer>
  );
}

export default Footer;
