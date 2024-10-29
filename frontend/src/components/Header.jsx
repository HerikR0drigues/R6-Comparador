// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className='bg-backgroundPurple shadow-sm'>
        <div className='justify-between max-w-5xl mx-auto px-4 py-4 flex items-center'>
            <i className='text-white font-pixelfy text-3xl font-bold'>Herik<span className='text-spanHeader'>.dev</span></i>
            <h1 className='text-white text-2xl font-bold'>Comparador Rainbow6</h1>
            <h2 className='text-white text-1xl font-bold'>React + NodeJS + Tailwind</h2>
        </div>
    </header>
  );
}

export default Header;
