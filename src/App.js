import React from 'react';

import Layout from './components/Layout';
// import FAB from './components/FAB';
import { FabContext, fabState } from './fab-context';
import ModalFAQ from './components/ModalFAQ';

import humaaansPhone from './assets/humaaansPhone.svg';
import humaaansPerson from './assets/humaaansPerson.svg';
import mission from './assets/mission.svg';
import phone from './assets/phone.svg';
import CFRJIE from './assets/res-CFRJIE.svg';
import urban from './assets/res-urban.svg';
import world from './assets/res-world.svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFab = () => {
      //fabState is initially false
      //if the state of the fab in 'this.state' is true, then make it false
      //otherwise it's false

      this.setState((state) => ({ isFabOpen: !state.isFabOpen }));
    };

    this.state = {
      isFabOpen: fabState,
      toggleFab: this.toggleFab,
    };
  }

  render() {
    return (
      <FabContext.Provider value={this.state}>
        <Layout>
          {/* Photo & CTA Button */}
          <section className=' px-10 py-10 sm:py-32 lg:p-32 flex flex-wrap container mx-auto'>
            <div className='w-full sm:w-1/2 flex flex-col space-y-8 my-auto'>
              <h1 className='text-5xl max-w-md font-family-karla'>
                Provide lasting engagement
              </h1>
              <p className='text-xl max-w-md  font-family-montserrat'>
                In partnership with the Center for Racial Justice in Education,
                Vi connects young people to learning about racial justice
              </p>
              <button
                onClick={() => this.state.toggleFab(!this.state.isFabOpen)}
                className='bg-yellow-500 rounded py-2 w-48 font-family-karla'
              >
                Try it
              </button>
            </div>
            <div className='w-full sm:w-1/2'>
              <img
                className='max-w-md sm:w-full'
                src={humaaansPhone}
                alt='humaaansPhone'
              />
            </div>
          </section>

          <section id='value' className='bg-yellow-500 flex'>
            <div className='flex w-10/12 p-20 pr-0'>
              <div className='w-1/2 m-10'>
                <img src={mission} alt='mission' />
              </div>
              <div className='w-1/2 mt-10'>
                <h1 className='text-2xl font-family-karla py-6'>Why Vi?</h1>
                <p className='font-family-montserrat'>
                  The Center For Racial Justice in Education focuses on
                  educating the community on racial justice, our goal is to make
                  their educational resources easily accessible to the user, by
                  allowing the user to tell our bot what they’re looking for,
                  and the bot simply fetches the resources to provide an
                  interactive experience.
                </p>
                <p className='font-family-montserrat py-8'>
                  Vi is a help bot designed for the Center For Racial Justice in
                  Education. Vi can help you find resources, answers, articles,
                  and any information you would find on the Center For Racial
                  Justice in Education website
                </p>
              </div>
            </div>
            <div className='w-2/12 mt-auto'>
              <img src={humaaansPerson} alt='humaaansPerson' />
            </div>
          </section>

          <section
            id='about'
            className='p-10 flex flex-col m-auto text-center space-y-4'
          >
            <div className='max-w-xl m-auto'>
              <h1 className='text-2xl font-family-karla'>How it Works</h1>
              <p className='font-family-montserrat py-8'>
                After clicking on the ICON, you can ask Vi a question, or let Vi
                lead the conversation.
              </p>

              <div className='bg-yellow-500 p-6 rounded'>
                <img src={phone} alt='phone' className='block m-auto' />
              </div>
            </div>
          </section>

          <section className='bg-yellow-500 text-center p-12'>
            <div className='max-w-xl m-auto'>
              <h1 className='text-2xl font-family-karla'>FAQ</h1>

              <ModalFAQ></ModalFAQ>

              <div className='flex space-between space-x-10 pt-10'>
                <img src={CFRJIE} alt='CFRJIE' />
                <img src={urban} alt='urban' />
                <img src={world} alt='world' />
              </div>
            </div>
          </section>
        </Layout>
      </FabContext.Provider>
    );
  }
}

export default App;
