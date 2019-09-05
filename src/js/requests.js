import $ from "jquery"

const postArticle = (text, setRecommendations, setLoading, setDecisionThreshold) => {

    const settings = {
        "async": true,
        "crossDomain": true,
        // "url": "http://127.0.0.1:5000",
        "url": "https://glacial-scrubland-06464.herokuapp.com/",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "accept": "text/event-stream",
        },
        "timeout": 0,
        "processData": false,
        "data": JSON.stringify({ entry: text }),

        "xhr": (e) => {
            const xhr = $.ajaxSettings.xhr();
            xhr.onprogress = e => {
                // For downloads
                console.log("progress")
                // $.ajax({
                //     "async": true,
                //     "crossDomain": true,
                //     "url": "https://glacial-scrubland-06464.herokuapp.com/",
                //     "method": "GET"
                // }).done( response => {
                //     console.log(response)
                // })

            };
            return xhr;
        }
    }

    $.ajax(settings).done(response => {
        console.log(response)
        response = JSON.parse(response.split("formatted\n")[1].replace(/\'/g, '"'))

        debugger
        let [before, after] = [0, 0]
        // breakout the 'before' and 'after' prediction probbilities before setting in state
        for (let pred of response.predictions) {
            if (pred.position === 'before') {
                before += 1
            } else {
                after += 1
            }
            pred[response.classes[0]] = pred.label_proba[0]
            pred[response.classes[1]] = pred.label_proba[1]
        }

        console.log({ before, after })

        setLoading(false)
        setRecommendations(response)
        setDecisionThreshold(response.decision_threshold)
    })
}

export {
    postArticle,
}