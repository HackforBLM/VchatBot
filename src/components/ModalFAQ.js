import React, { useState } from 'react';

const ModalFAQ = () => {
  const [isFAQShowing, toggleFAQ] = useState(false);

  const FAQContent = [
    { question: 'First FAQ', answer: 'The answer to the first FAQ' },
    { question: 'Second FAQ', answer: 'The answer to the second FAQ' },
    { question: 'Third FAQ', answer: 'The answer to the third FAQ' },
  ];

  return (
    <div className=''>
      <button
        onClick={() => toggleFAQ(!isFAQShowing)}
        className='bg-white rounded text-yellow-500 py-2 w-48 font-family-karla m-4'
      >
        {isFAQShowing ? 'Hide' : 'Show'}
      </button>

      <div className={isFAQShowing ? 'block h-40 overflow-y-auto' : 'hidden'}>
        {FAQContent.map((FAQItem) => (
          <div className='border-2 border-white rounded m-2'>
            <div class='bg-yellow-500 text-black font-family-karla rounded-t px-4 py-2'>
              {FAQItem.question}
            </div>
            <div class='bg-yellow-100 px-4 py-3 text-yellow-700 font-family-montserrat'>
              <p>{FAQItem.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalFAQ;
