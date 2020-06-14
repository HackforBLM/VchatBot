import React from 'react'
import Popup from 'reactjs-popup'
import './style/popup.css'

const Faq = () => {
    return (
        <div className="pop-up-outter">
            <Popup trigger={<button> FAQ </button>} position="top center" className="pop-up-outter"
            >
                <div width="500px">
                    <p width="500px">
                        Frequently Asked Questions
                    </p>
                    <div>
                        <p>What is "Vi"?</p>
                        <p>Vi is a help bot designed for the Center For Racial Justice in Education. Vi can help you find resources, answers, articles, and any information you would find on the Center For Racial Justice in Education website.</p>
                    </div>
                <div>
                    <p>How do I use it?</p>
                    <p> After you click on the “ICON” ((screenshot))</p>
                    <ol>
                        <li>Type in a question or</li>
                        <li>Let Vi lead the conversation</li>
                    </ol>
                </div>
                <div>
                    <p>What can I ask ?</p>
                    <p>You can ask Vi about “Black History Month” (add additional topics)</p>
                </div>
                <div>
                    <p>Is there someone I can talk to?</p>
                    <ol>
                        <li>If you need someone to talk to about other topics, you can call the Center for Racial Justice in Education at (646) 688-4470</li>
                        <li>If you’re having any kind of emergency, call 911</li>
                        <li>If you need someone to talk to about your mental health, call 1-800-662-HELP</li>
                        <li>If you or someone you know is having thoughts of suicide, call 1-800-273-8255
                            <ol>
                                <li>
                                    If you want to chat with someone instead:
                                        <a
                                            href="https://suicidepreventionlifeline.org/talk-to-someone-now/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            > Talk to someone now
                                        </a>
                                </li>
                            </ol>
                        </li>
                        
                    </ol>

                </div>
            </div>
        </Popup>
        </div>
    )

}

export default Faq

