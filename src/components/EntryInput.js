import React from 'react';

import { postArticle } from '../js/requests'

const EntryInput = ({ setRecommendations, setLoading, setDecisionThreshold, setCurrentRec, setRequestError, setRevisionsSubmitted }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        // clear any previously rendered recommendations
        setRecommendations(null)

        const userEntry = document.getElementById("user-entry")
        
        postArticle(userEntry.value, setRecommendations, setLoading, setDecisionThreshold, setCurrentRec, setRequestError)
        
        // Clear the form data 
        userEntry.value = ""
        
        setRequestError("")
        setLoading(true)
        setRevisionsSubmitted(false)
    }

    return(
        <form id="entry-input" onSubmit={handleSubmit}>
            <label htmlFor="user-entry">Paste a Wikipedia article URL in the text field below to get started</label>
            <br/>
            <input type="text" id="user-entry" placeholder="paste Wikipedia article link here" required/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default EntryInput