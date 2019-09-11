import React from 'react';

const Instructions = () => {

    return (
        <div className="instructions-container">
            <h3 className="section-heading">About & Instructions</h3>
            <div className="instructions-content">
                <p>
                    If you want to learn something, chances are that the knowledge exists somewhere online. However, the quantity of information can seem nearly infinite sometimes, and can be difficult to navigate. Where do I begin? are there any prerequisites? What can I do with the knowledge that I gain?
                </p>

                <p>
                    Look no further! <strong><em>Wiki Learn</em></strong> is an interactive curriculum development tool to help you navigate the vast body of knowledge on the modern web so you can spend less time Googling for the answers and more time learning!
                </p>

                <p>
                    How does it work? - Using data obtained in real time from Wikipedia, I use a custom built recommendation system to find the most relevant and related topics to a user provided article. Then, using machine learning methods, I split the recommendations into two categories - topics that are prerequisites, and topics that you could explore after to further expand your knowledge.
                </p>

                <hr />

                <h2>Instructions:</h2>
                <h3>Basics:</h3>
                <p>
                    In the box below, simply provide a link to a Wikipedia article that you are interested in learning more about. Then just wait a few moments for you results to be calculated.
                </p>

                <em>Note: due to limited computing resources, results can take a few minutes to calculate. If you want a fast introduction to how the system works, try one of the pre-calculated <strong>Quick start</strong> topics below.</em>

                <p>
                    Once results have been calculated and displayed, you can click on any topic in either the Before or After columns to see a summary, read the full wikipedia article, or do a Google search.
                </p>

                <hr />

                <h3>Tuning Results:</h3>

                <p>
                    You can change the number of total recommendations displayed by adjusting the <em><strong>Displayed Recommendations</strong></em> slider. The default is 20, and you can go as high as 100. 
                </p>

                <p>
                    If you see some topics that you believe have been sorted into the wrong before/after category, you have a few options to adjust them. When you click on a topic in either column, you will have the option to <em><strong>Swap Before/After</strong></em>. Clicking this button will move the topic to the alternate column. 
                </p>

                <p>
                    Alternatively, you can change the <em><strong>Decision Threshold</strong></em> slider. You can think of the decision threshold as setting how sure the computer needs to be to put a topic in the <em>Before</em> column. 0 is not sure at all (everything would be placed in the Before column), and 1 is 100% certain (everything would be placed in the After column). The benefit of this approach is that, if you see a few topics that have been sorted into the wrong column, and you move the decision threshold to push them to the alternate column, you may end up pushing other topics that you were unaware of into the correct column as well.  
                </p>
            </div>
        </div>
    )

}

export default Instructions;