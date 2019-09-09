import React from 'react';
import { submitLabeledData } from '../js/requests';



const SubmitRevisions = ({ entry, displayedRecs }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const submission = {
            entry: entry,
            labeledPredictions: displayedRecs
        }
        submitLabeledData({submission})
    }

    return(
        <form className="submit-revisions" onSubmit={handleSubmit}>
            <p>Want to support this project? If you see a topic you think is in the wrong before/after column, you can swap it with the <em>Swap Before/After</em> button above. When you are happy with the way the columns are laied out, submit them with the button below. I will then be able to use your insights to improve the accuracy of my classification model.</p>
            <input type="submit" value="Submit Columns" />
        </form>
    )

}

export default SubmitRevisions;