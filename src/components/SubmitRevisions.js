import React from 'react';
import { submitLabeledData } from '../js/requests';



const SubmitRevisions = ({ entry, displayedRecs, setRevisionsSubmitted }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const submission = {
            entry: entry,
            labeledPredictions: displayedRecs
        }
        await submitLabeledData({ submission })
        setRevisionsSubmitted(true)
    }

    return (
        <div className="submit-revisions">
            <hr/>
            <form className="submit-revisions-form" onSubmit={handleSubmit}>
                <p>Want to support this project? If you see a recommendation you think is in the wrong before/after column, you can swap it by changing the <strong>Decision Threshold</strong> slider, or with the <strong>Swap Before/After</strong> button above. When you are happy with the way the columns are laid out, submit your revisions by pressing the button below. I will then be able to use your insights to improve the accuracy of my classification model.</p>
                <input type="submit" value="Submit Revisions" />
            </form>
        </div>
    )

}

export default SubmitRevisions;