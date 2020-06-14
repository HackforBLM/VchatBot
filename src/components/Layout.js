import React from 'react';

import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = (props) => (
  <div className='flex flex-col h-full min-h-screen antialiased'>
    <Navbar />
    <div className='mb-auto'>{props.children}</div>

    {/* <Footer /> */}
  </div>
);

export default Layout;
