import React from 'react';

import { FabContext } from '../fab-context';

// import messenger from '../assets/messenger.svg';
import chatbubble from '../assets/chatbubble.png';

const FAB = (props) => {
  return (
    <FabContext.Consumer>
      {({ isFabOpen, toggleFab }) => (
        <div>
          <div
            className={isFabOpen ? 'block rounded-lg overflow-auto' : 'hidden'}
          >
            {props.children}
          </div>
          <button
            onClick={() => toggleFab(!isFabOpen)}
            className='w-12 h-12 bg-white rounded-full shadow-lg p-2 flex m-2 ml-auto'
          >
            {isFabOpen ? (
              <svg
                class='h-full w-full m-auto fill-current'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              </svg>
            ) : (
              <img src={chatbubble} alt='chatbubble' />
            )}
          </button>
        </div>
      )}
    </FabContext.Consumer>
  );
};

export default FAB;
