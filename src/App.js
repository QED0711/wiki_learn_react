import React, { useState } from 'react';
import './App.css';
import EntryInput from './components/EntryInput';
import RecommendationsDisplay from './components/RecommendationsDisplay';
import Loading from './components/Loading';
import SliderGroup from './components/SliderGroup';
import PreCalculatedInterface from './components/PreCalculatedInterface';
import Header from './components/Header';
import Instructions from './components/Instructions';

console.log(process.env)

let testRecommendations = {
  entry: "Decision tree",
  classes: ["before", "after"],
  decision_threshold: 0.47,
  predictions: [
    { node: "55 after", label_proba: [0.45, 0.55], position: "after" },
    { node: "58 before", label_proba: [0.58, 0.42], position: "before" },
    { node: "60 after", label_proba: [0.40, 0.60], position: "after" },
    { node: "72 before", label_proba: [0.72, 0.38], position: "before" },
  ]
}

for (let rec of testRecommendations.predictions) {
  rec[testRecommendations.classes[0]] = rec.label_proba[0]
  rec[testRecommendations.classes[1]] = rec.label_proba[1]
}
// console.log(testRecommendations.predictions)

const App = () => {

  const [recommendations, setRecommendations] = useState(null) // change to null for deploy
  const [currentRec, setCurrentRec] = useState(null) // change to null for deploy
  const [currentExtract, setCurrentExtract] = useState("")
  const [loading, setLoading] = useState(false)
  const [decisionThreshold, setDecisionThreshold] = useState(0.5)
  const [numRecommendations, setNumRecommendations] = useState(20)
  const [requestError, setRequestError] = useState("")
  const [revisionsSubmitted, setRevisionsSubmitted] = useState(false)

  return (
    <div className="App">
      <Header />
      <Instructions />
      <EntryInput
        setRecommendations={setRecommendations}
        setLoading={setLoading}
        setDecisionThreshold={setDecisionThreshold}
        setCurrentRec={setCurrentRec}
        setRequestError={setRequestError}
        setRevisionsSubmitted={setRevisionsSubmitted}
      />

      {
        loading
        &&
        <Loading />
      }
      {
        requestError.length > 0
        &&
        <div className="error-message">
          <h3>{requestError}</h3>
          <p>
            Note: Due to limited computing resources, an arbitrary limit has been set on the size of articles that can be submitted to this web app. If you would like to get around this limit, see <a href="https://github.com/QED0711/wiki_learn_flask" target="_blank">here (flask backend)</a> and <a href="https://github.com/QED0711/wiki_learn_react" target="_blank">here (react frontend)</a> to deploy and modify your own local copy.  
          </p>
        </div>
      }
      {
        recommendations
        &&
        <div>
          <SliderGroup
            setDecisionThreshold={setDecisionThreshold}
            decisionThreshold={decisionThreshold}
            setNumRecommendations={setNumRecommendations}
          />
          <RecommendationsDisplay
            recommendations={recommendations}
            setRecommendations={setRecommendations}
            currentRec={currentRec}
            setCurrentRec={setCurrentRec}
            currentExtract={currentExtract}
            setCurrentExtract={setCurrentExtract}
            decisionThreshold={decisionThreshold}
            numRecommendations={numRecommendations}
            setDecisionThreshold={setDecisionThreshold}
            loading={loading}
            setLoading={setLoading}
            setRequestError={setRequestError}
            revisionsSubmitted={revisionsSubmitted}
            setRevisionsSubmitted={setRevisionsSubmitted}

          />
        </div>
      }
      {
        !loading
        &&
        <PreCalculatedInterface
          setRecommendations={setRecommendations}
          setCurrentRec={setCurrentRec}
          setRevisionsSubmitted={setRevisionsSubmitted}
          setRequestError={setRequestError}
        />
      }
    </div>
  );
}

export default App;


