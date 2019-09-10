import React from 'react';

const Instructions = () => {

    return (
        <div className="instructions-container">
            <h3 className="section-heading">About & Instructions</h3>
            <div className="instructions-content">
                <p>
                    If you want to learn something, chances are that the knowledge exists somewhere online. However, quantity of information can seem nearly infinite sometimes, and can be difficult to navigate. Where do I being? Is there any prerequisite knowledge needed? What can I do with the knowledge that I gain?
                </p>
                
                <p>
                    Look no further! <strong><em>Wiki Learn</em></strong> is an interactive curriculum development tool to help you navigate the vast body of knowledge on the modern web!
                </p>

                <p>
                    How does it work? - Using data obtained in real time from Wikipedia, I use a custom built recommendation system to find the most relevant and related topics to a user provided article. Then, using machine learning methods, I split the recommendations into two categories - topics that are prerequisites, and topics that you could explore after to further expand your knowledge.    
                </p>
                
                <hr/>

                <h2>Instructions:</h2>

                <p>
                    In the box below, simply provide a link to a Wikipedia article that you are interested in learning more about. Then just wait a few moments for you results to be calculated. 
                </p>

                <em>Note: due to limited computing resources, results can take a few minutes to calculate. If you just want to see how the system works, try one of the pre-calculated <strong>Quick start</strong> topics below.</em>
            </div>
        </div>
    )

}

export default Instructions;