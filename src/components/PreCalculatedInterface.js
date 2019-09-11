import React from 'react'

import classProbaLabeler from '../js/classProbaLabeler'

import randomForest from '../data/Random forest'
import RecommenderSystem from '../data/RecommenderSystem'
import ROC from '../data/ROC'
import CDF from '../data/CDF'
import graphTheory from '../data/graphTheory'
import reactFramework from '../data/reactFramework'

const PreCalculatedInterface = ({ 
    setRecommendations, 
    setCurrentRec, 
    setRevisionsSubmitted, 
    setRequestError 
}) => {
    const data = [
        RecommenderSystem,
        graphTheory,
        randomForest,
        ROC,
        CDF,
        reactFramework,
    ]

    const handleClick = (recs) => {
        const setAsRec = (e) => {
            let [before, after] = classProbaLabeler(recs)
            console.log({ before, after, article: recs.entry })
            setRecommendations(recs)
            setCurrentRec(recs.entry)
            setRevisionsSubmitted(false)
            setRequestError("")
        }
        return setAsRec
    }

    const recommendationDivs = (data) => {
        return data.map((rec, i) => {
            return (
                <div key={i} className="pre-calculated-rec" onClick={handleClick(rec)}>
                    {rec.entry}
                </div>
            )
        })
    }

    return (
        <div className="pre-calculated-container">
            <h3 className="section-heading">Quick Start</h3>
            <p>Want a fast and easy way to get started with Wiki Learn? Try one of the pre-calculated topics below.</p>
            <p>No waiting. Just learning.</p>
            {recommendationDivs(data)}
        </div>
    )

}

export default PreCalculatedInterface;