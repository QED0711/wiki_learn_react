import React from 'react';

const RecommendationsDisplay = ({ recommendations, currentRec, setCurrentRec, decisionThreshold, numRecommendations }) => {

    const reassignClasses = (recs) => {
        // Make a copy of the predictions array
        let predictions = recs.predictions.map(x => { return { ...x } })

        // loop through predictions array and swap if a current prediction does not match threshold
        predictions.forEach(pred => {
            if (decisionThreshold >= 0.5) {
                if (pred.before < decisionThreshold && pred.position === 'before') {
                    pred.position = 'after'
                }
            } else {
                if (pred.after < 1 - decisionThreshold && pred.position === "after") {
                    pred.position = 'before'
                }
            }
        })

        return { ...recs, predictions }
    }

    let recs = reassignClasses(recommendations)

    const beforeRecs = []
    const afterRecs = []

    const parseRecommendations = (recs) => {
        let predictions = recs.predictions.slice(0, numRecommendations + 1)
        predictions.forEach((rec, i) => {
            if (rec.position === "before") {
                beforeRecs.push(<div key={i} className={`recommendation position-${rec.position}`} onClick={() => { setCurrentRec(rec.node) }}>
                    <p>
                        {rec.node}
                    </p>
                </div>)
            } else {
                afterRecs.push(<div key={i} className={`recommendation position-${rec.position}`} onClick={() => { setCurrentRec(rec.node) }}>
                    <p>
                        {rec.node}
                    </p>
                </div>)
            }
        })
    }

    parseRecommendations(recs)


    return (
        <div>
            <div className="results-title"  onClick={(e) => {setCurrentRec(recs.entry)}}>
                <h1>{recs.entry}</h1>
            </div>
            <div className="recommendation-display">

                <div className="before-recs">
                    {beforeRecs}
                </div>
                <div className="current-content">
                    <h2>{currentRec}</h2>
                </div>
                <div className="after-recs">
                    {afterRecs}
                </div>
            </div>
        </div>
    )

}

export default RecommendationsDisplay

