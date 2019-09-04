import React from 'react';

import { postArticle } from '../js/requests'

const EntryInput = ({ setRecommendations }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const userEntry = document.getElementById("user-entry").value

        postArticle(userEntry, setRecommendations)
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