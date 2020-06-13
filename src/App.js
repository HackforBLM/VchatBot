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
          {/* <div className="flex justify-end">
            <iframe className="rounded" title="chatbox" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/ff6a7a28-4a3d-449b-9fe2-9823b283360b"></iframe>
          </div> */}

        </div>
      </section>

      {/* Features Highlight */}
    </Layout>
  );
}

export default App;
