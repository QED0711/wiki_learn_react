const classProbaLabeler = (results) => {
    let [before, after] = [0, 0]
    // breakout the 'before' and 'after' prediction probbilities before setting in state
    for (let pred of results.predictions) {
        if (pred.position === 'before') {
            before += 1
        } else {
            after += 1
        }
        try{
            pred[results.classes[0]] = pred.label_proba[0]
            pred[results.classes[1]] = pred.label_proba[1]
        } catch(err){
            continue;
        }
    }
    return [before, after]
}

export default classProbaLabeler;