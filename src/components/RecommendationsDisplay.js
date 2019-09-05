import React from 'react';

const RecommendationsDisplay = ({ recommendations, decisionThreshold, numRecommendations }) => {

    const reassignClasses = (recs) => {
        // Make a copy of the predictions array
        let predictions = recs.predictions.map(x => {return {...x}})

        // loop through predictions array and swap if a current prediction does not match threshold
        predictions.forEach(pred => {
            if(decisionThreshold >= 0.5){
                if(pred.before < decisionThreshold && pred.position === 'before'){
                    pred.position = 'after'
                }
            } else {
                if(pred.after < 1 - decisionThreshold && pred.position === "after"){
                    pred.position = 'before'
                }
            }
        })

        return {...recs, predictions}
    }

    let recs = reassignClasses(recommendations)
    
    const beforeRecs = []
    const afterRecs = []

    const parseRecommendations = (recs) => {
        let predictions = recs.predictions.slice(0, numRecommendations + 1)
        predictions.forEach((rec, i) => {
            if (rec.position === "before"){
                beforeRecs.push(<div key={i} className={`recommendation position-${rec.position}`} onClick={() => {console.log(rec.node)}}>
                                    <p>
                                        {rec.node}
                                    </p>
                                </div>)
            } else {
                afterRecs.push(<div key={i} className={`recommendation position-${rec.position}`} onClick={() => {console.log(rec.node)}}>
                                    <p>
                                        {rec.node}
                                    </p>
                                </div>)
            }
        })
    }

    parseRecommendations(recs)


    return (
        <div className="recommendation-display">
            
            <ul className="before-recs">
                {beforeRecs}
            </ul>
            <div className="current-content">
                {recs.entry}
            </div>
            <ul className="after-recs">
                {afterRecs}
            </ul>
        </div>
    )

}

export default RecommendationsDisplay

