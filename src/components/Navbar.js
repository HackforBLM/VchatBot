import React from 'react';
import logo from '../assets/logo.svg';

const links = [
  { name: 'Why V?', url: '#/' },
  { name: 'Integrations', url: '#/' },
  { name: 'Center for Racial Justice in Education', url: '#/' },
];

const Navbar = () => (
  <div className='bg-white shadow-lg p-2 flex items-center justify-between'>
    <div>
      <img src={logo} alt='logo' className='ml-4 h-8' />
    </div>
    <div className='hidden sm:block m-auto list-none flex space-x-10 font-family-montserrat'>
      {links.map((link) => (
        <a href={link.url}>{link.name}</a>
      ))}
    </div>
    <div className='block sm:hidden'>
      <button
        type='button'
        class='block text-yellow-500 hover:text-gray-500 focus:text-white focus:outline-none pointer'
      >
        <svg class='h-6 w-6 fill-current' viewBox='0 0 24 24'>
          <path
            fill-rule='evenodd'
            d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
          />
        </svg>
      </button>
    </div>
  </div>
);

export default Navbar;
