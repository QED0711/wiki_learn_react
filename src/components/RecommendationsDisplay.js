import React from 'react';

const RecommendationsDisplay = ({ recommendations }) => {

    const parseRecommendations = (recs) => {
        
        return recs.predictions.map((rec, i) => {
            return <li key={i} className={`position-${rec.position}`}>{rec.node}</li>
        })
    }

    return (
        <div className="recommendation-display">
            <ul>
                {parseRecommendations(recommendations)}
            </ul>
        </div>
    )

}

export default RecommendationsDisplay

