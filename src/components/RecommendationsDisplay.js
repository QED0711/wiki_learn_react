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

    const parseRecommendations = (recs) => {
        let predictions = recs.predictions.slice(0, numRecommendations + 1)
        return predictions.map((rec, i) => {
            return <li key={i} className={`position-${rec.position}`}>{rec.node} - {rec.position.toUpperCase()}</li>
        })
    }

    return (
        <div className="recommendation-display">
            <ul>
                {parseRecommendations(recs)}
            </ul>
        </div>
    )

}

export default RecommendationsDisplay

