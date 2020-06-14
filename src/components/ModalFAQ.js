import React, { useState } from 'react';

const ModalFAQ = () => {
  const [isFAQShowing, toggleFAQ] = useState(false);

  const FAQContent = [
    {
      question:
        'How does Vi Bot help the Center for Racial Justice in Education?',
      answer:
        'This Bot will correlate with an Organization called “Center For Racial Justice in Education”. Vi can help you find resources, answers, articles, and any information you would find on the Center For Racial Justice on their Education website.',
    },
    {
      question: 'How can Vi Bot answer my questions?',
      answer:
        'Users must type a question into Vi Bot and press enter; after pressing enter, Vi Bot will automatically provide a return response either with a single question, multiple questions, statement, or fact.',
    },
    {
      question: 'Why use Vi Bot?',
      answer:
        'Vee Bot shall help improvise Center for Racial Justice in Education current AI data; and we decided to tweak it so it can cater to users demanded facts and questions related to Racial Justice. Currently, Vi is designated to answer questions and or concerns that parents, students and teachers will need in their everyday life in connecting and understanding how to deal with our nations issues regarding racial discrimination.',
    },
    {
      question: 'How will Vi Bot improve in the future?',
      answer:
        'In the future, Vi will be able to provide more and more content for the user to interact with. The user will also be able to communicate with other users on the platform, to chat, share content, learn together, and organize their community of teachers, students and educators. As a future goal, we’d like to gamify the learning experience, by letting the user earn points for the content they explore, or getting for the right answer on trivia questions on the topic of racial justice.',
    },
  ];

  return (
    <div className=''>
      <button
        onClick={() => toggleFAQ(!isFAQShowing)}
        className='bg-white rounded text-yellow-500 py-2 w-48 font-family-karla m-4'
      >
        {isFAQShowing ? 'Hide' : 'Show'}
      </button>

      <div className={isFAQShowing ? 'block h-48 overflow-y-auto' : 'hidden'}>
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
