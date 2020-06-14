import React, { useState } from 'react';

import messenger from '../assets/messenger.svg';

const FAB = (props) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div>
      <div className={isOpen ? 'block rounded-lg overflow-auto' : 'hidden'}>
        {props.children}
      </div>
      <button
        onClick={() => toggleOpen(!isOpen)}
        className='w-12 h-12 bg-white rounded-full shadow-lg p-2 flex m-2 ml-auto'
      >
        {isOpen ? (
          <svg class='h-full w-full m-auto fill-current' viewBox='0 0 24 24'>
            <path
              fill-rule='evenodd'
              d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
            />
          </svg>
        ) : (
          <img src={messenger} alt='messenger' />
        )}
      </button>
    </div>
  );
};

export default FAB;
