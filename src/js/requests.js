import $ from "jquery"

const postArticle = (text, setRecommendations, setLoading, setDecisionThreshold) => {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://127.0.0.1:5000",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        "timeout": 0,
        "processData": false,
        "data": JSON.stringify({ entry: text })
    }

    $.ajax(settings).done(response => {
        console.log(response)

        // breakout the 'before' and 'after' prediction probbilities before setting in state
        for (let pred of response.predictions) {
            pred[response.classes[0]] = pred.label_proba[0]
            pred[response.classes[1]] = pred.label_proba[1]
        }

        setLoading(false)
        setRecommendations(response)
        setDecisionThreshold(response.decision_threshold)
    })
}

export {
    postArticle,
}