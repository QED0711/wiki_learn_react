import $ from "jquery"

const postArticle = (text, setRecommendations) => {

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
        "data": JSON.stringify({entry: text})
    }

    $.ajax(settings).done(response => {
        console.log(response)
        setRecommendations(response)
    })
}

export {
    postArticle,
}