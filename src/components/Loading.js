import React, { useState } from 'react';

const Loading = () => {

    const [loadingText, setLoadingText] = useState("Hmm, let me think about that. ")

    const animate = () => {
        // setInterval(() => {
        //     setLoadingText(loadingText + ". ")
        // }, 500)
    }
    animate()
    return(
        <div className="loading-placeholder">
            <h2>{loadingText}</h2>
        </div>
    )
}

export default Loading