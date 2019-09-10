import React from 'react';
import { fetchArticleExtract } from '../js/requests';
import RecommendationCard from './RecommendationCard'
import TopicInterface from './TopicInterface';
import SubmitRevisions from './SubmitRevisions';

const RecommendationsDisplay = ({
    recommendations,
    setRecommendations,
    currentRec,
    setCurrentRec,
    currentExtract,
    setCurrentExtract,
    setDecisionThreshold,
    decisionThreshold,
    loading,
    setLoading,
    numRecommendations,
    setRequestError,
    revisionsSubmitted,
    setRevisionsSubmitted
}) => {
    console.log("loading")

    const reassignClasses = (recs) => {
        // Make a copy of the predictions array
        let predictions = recs.predictions.map(x => { return { ...x } })
        // loop through predictions array and swap if a current prediction does not match threshold
        predictions.forEach(pred => {

            if(pred.static){
                if(pred.static === 'before'){
                    pred.position = "before"; 
                } else {
                    pred.position = "after";
                }
                return // do not proceed to next steps
            }

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
    
    let beforeRecs = []
    let afterRecs = []
    let displayedRecs = []

    const parseRecommendations = (recs) => {
        let predictions = recs.predictions.slice(0, numRecommendations + 1)
        let card;
        predictions.forEach((rec, i) => {
            // keep track of recs currently being displayed
            displayedRecs.push(rec)

            card = <RecommendationCard
                index={i}
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
        <div className="recommendation-container">
            <div className="section-heading" onClick={(e) => {
                setCurrentRec(recs.entry)
                fetchArticleExtract(recs.entry, setCurrentExtract)
            }}>
                <h1>{recs.entry}</h1>
            </div>
            <div className="recommendation-display">
                <div className="position-container before-container">
                    <h3 className="column-heading before-heading">Learn Before</h3>
                    <div className="before-recs">
                        {beforeRecs}
                    </div>
                </div>

                <div className="current-content extract-container">
                    <h2 className="current-topic-title">{currentRec}</h2>
                    <TopicInterface
                        currentRec={currentRec}
                        recommendations={recommendations}
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
                <div className="position-container after-container">
                    <h3 className="column-heading after-heading">Learn After</h3>
                    <div className="after-recs">
                        {afterRecs}
                    </div>
                </div>
            </div>
            {
                !revisionsSubmitted
                ?
                <SubmitRevisions entry={recs.entry} displayedRecs={displayedRecs} setRevisionsSubmitted={setRevisionsSubmitted} />
                :
                <h4><em>Thank you for your contributions to the Wiki Learn project!</em></h4>
            }
        </div>
    )

}

export default RecommendationsDisplay

