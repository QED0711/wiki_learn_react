import React from 'react';

import { postArticle } from '../js/requests'

const EntryInput = ({ setRecommendations, setLoading }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        // clear any previously rendered recommendations
        setRecommendations(null)

        const userEntry = document.getElementById("user-entry")
        
        postArticle(userEntry.value, setRecommendations, setLoading)
        
        // Clear the form data 
        userEntry.value = ""

        setLoading(true)
    }

    return(
        <form id="entry-input" onSubmit={handleSubmit}>
            <label for="user-entry">Wikipedia URL</label>
            <br/>
            <input type="text" id="user-entry" />
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default EntryInput