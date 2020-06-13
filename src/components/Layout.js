import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <div className='flex flex-col h-full min-h-screen'>
    <Navbar />
    <div className='mb-auto p-4'>{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
