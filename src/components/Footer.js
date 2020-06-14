import React from 'react';
import Faq from './Faq'
import HowTo from './HowTo'

const Footer = () => (
  <div className='bg-gray-900 text-white p-2 text-center'>
    <span className='font-semibold'>Footer</span>
    <HowTo />
    <Faq />
  </div>
)

export default Footer;
