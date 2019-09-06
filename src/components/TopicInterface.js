import React from "react"
import { postArticle } from "../js/requests"

const TopicInterface = ({currentRec,
    setRecommendations, 
    setLoading, 
    setDecisionThreshold, 
    setCurrentRec, 
    setRequestError,
    showRequestButton}) => {

    const handleRequestClick = (e) => {
        // console.log(currentRec)
        setLoading(true)
        setRecommendations(null)
        setRequestError("")
        postArticle(currentRec, setRecommendations, setLoading, setDecisionThreshold, setCurrentRec, setRequestError)
    }

    const handleRedirectClick = (e) => {
        window.open("https://en.wikipedia.org/wiki/" + currentRec)
    }

    return(
        <div className="topic-interface">
            {
                showRequestButton
                &&
                <button onClick={handleRequestClick}>Recommendations from here</button>
            }
            <button onClick={handleRedirectClick}>Read Full Article</button>
        </div>
    )
}

export default TopicInterface