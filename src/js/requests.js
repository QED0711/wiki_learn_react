import $ from "jquery"

const postArticle = (text, setRecommendations, setLoading, setDecisionThreshold, setCurrentRec, setRequestError) => {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://127.0.0.1:5000",
        // "url": "https://wiki-learn-252012.appspot.com/",
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
                console.log("progress")
            };
            return xhr;
        }
    }

    $.ajax(settings).done(response => {
        console.log(response)
        // debugger
        try {
            response = JSON.parse(response.split("formatted\n")[1].replace(/\'/g, '"').replace(/\w\"\w/g, "'"))
        } catch (err) {
            if (err.name === "TypeError") {
                setLoading(false)
                setRequestError("There was a problem retrieving the data you specified. It may be that the article was too large. Try choosing a smaller, more specific topic.")
                return
            }
        }

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
        setCurrentRec(response.entry)
        setRecommendations(response)
        setDecisionThreshold(response.decision_threshold)
    })
}

// ====================================================

const fetchArticleExtract = (title, setCurrentExtract) => {

    let url = "https://en.wikipedia.org/w/api.php";
    url = url + "?origin=*";


    const params = {
        action: "query",
        format: "json",
        titles: title,
        prop: "extracts",
        exintro: true,
        explaintext: true,
        exsectionformat: 'plain',
    };


    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    fetch(url)
        .then(response => response.json())
        .then(json => {
            const pageID = Object.keys(json.query.pages)[0]
            setCurrentExtract(json.query.pages[pageID].extract)
        })
}

export {
    postArticle,
    fetchArticleExtract
}