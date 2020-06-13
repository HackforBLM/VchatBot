import React from 'react';

import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>V Chat says "Hello World"</h1>
      {/* Photo & CTA Buttons */}

      {/* Missions & Values */}
      <section>
        <div>
          <h2 className='text-xl'>Mission</h2>
          <p>
            The Center For Racial Justice in Education focuses on educating the
            community on racial justice, our goal is to make their educational
            resources easily accessible to the user, by allowing the user to
            tell our bot what they’re looking for, and the bot simply fetches
            the resources to provide an interactive experience.
          </p>
        </div>
      </section>

      {/* Features Highlight */}
    </Layout>
  );
}

export default App;
