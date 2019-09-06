import React from 'react';
import { fetchArticleExtract } from '../js/requests';
import RecommendationCard from './RecommendationCard'
import TopicInterface from './TopicInterface';

const RecommendationsDisplay = ({
    recommendations,
    setRecommendations,
    currentRec,
    setCurrentRec,
    currentExtract,
    setCurrentExtract,
    setDecisionThreshold,
    decisionThreshold,
    setLoading,
    numRecommendations,
    setRequestError
}) => {

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
        let card;
        predictions.forEach((rec, i) => {

            card = <RecommendationCard
                key={i}
                rec={rec}
                setCurrentExtract={setCurrentExtract}
                setCurrentRec={setCurrentRec}
                fetchArticleExtract={fetchArticleExtract}
            />

            if (rec.position === "before") {
                beforeRecs.push(card)
            } else {
                afterRecs.push(card)
            }
        })
    }

    parseRecommendations(recs)


    if (currentRec === recs.entry) {
        fetchArticleExtract(recs.entry, setCurrentExtract)
    }

    return (
        <div>
            <div className="results-title" onClick={(e) => {
                setCurrentRec(recs.entry)
                fetchArticleExtract(recs.entry, setCurrentExtract)
            }}>
                <h1>{recs.entry}</h1>
            </div>
            <div className="recommendation-display">

                <div className="before-recs">
                    {beforeRecs}
                </div>

                <div className="current-content">
                    <h2 className="current-topic-title">{currentRec}</h2>
                    <TopicInterface
                        currentRec={currentRec}
                        setRecommendations={setRecommendations}
                        setLoading={setLoading}
                        setDecisionThreshold={setDecisionThreshold}
                        setCurrentRec={setCurrentRec}
                        setRequestError={setRequestError}
                        showRequestButton={currentRec !== recs.entry}
                    />
                    <div className="extract">
                        <p>{currentExtract}</p>
                    </div>
                </div>

                <div className="after-recs">
                    {afterRecs}
                </div>
            </div>
        </div>
    )

}

export default RecommendationsDisplay

