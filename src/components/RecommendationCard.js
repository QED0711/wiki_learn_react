import React from 'react';

const RecommendationCard = ({ index, rec, setCurrentExtract, setCurrentRec, fetchArticleExtract}) => {

    return (
        <div key={index} className={`recommendation position-${rec.position}`} onClick={() => {
            setCurrentRec(rec.node)
            fetchArticleExtract(rec.node, setCurrentExtract)
        }}>
            <p>
                {rec.node}
            </p>
        </div>
    )

}

export default RecommendationCard;