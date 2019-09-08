import React from "react"
import { postArticle } from "../js/requests"

const TopicInterface = ({
    currentRec,
    recommendations,
    setRecommendations,
    setLoading,
    setDecisionThreshold,
    setCurrentRec,
    setRequestError,
    showRequestButton }) => {

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

    const handleGoogleSearchClick = (e) => {
        window.open("https://www.google.com/search?q=" + currentRec.replace(/\s/g, "+"))
    }

    const getCurrentRecObj = () => {
        for(let rec of recommendations.predictions){
            if(rec.node === currentRec){
                return rec
            }
        }
    }

    const currentRecObj = getCurrentRecObj()

    const swapLabel = () => {
        if(currentRecObj){
            // these objects are referencing the delivered object in the main state
            // any changes here will change that state directly (which is intended in this case so we don't need to requery the results)
            currentRecObj.position = currentRecObj.position === 'before' ? "after" : "before";
            currentRecObj.static = currentRecObj.position
        }
        setRecommendations({...recommendations})
    }

    return (
        <div className="topic-interface">
            {
                showRequestButton
                &&
                <div>
                    <button onClick={swapLabel}>Swap Before/After</button>
                    <button onClick={handleRequestClick}>Recommendations from here</button>
                </div>
            }
            <button onClick={handleRedirectClick}>Read Full Article</button>
            <button onClick={handleGoogleSearchClick}>Search on Google</button>
        </div>
    )
}

export default TopicInterface