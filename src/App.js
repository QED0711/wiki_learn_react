import React, { useState } from 'react';
import './App.css';
import EntryInput from './components/EntryInput';
import RecommendationsDisplay from './components/RecommendationsDisplay';
import Loading from './components/Loading';
import SliderGroup from './components/SliderGroup';


let testRecommendations = {
  entry: "Something That Was Searched",
  classes: ["before", "after"],
  decision_threshold: 0.47,
  predictions: [
    {node: "55 after", label_proba: [0.45, 0.55], position: "after"},
    {node: "58 before", label_proba: [0.58, 0.42], position: "before"},
    {node: "60 after", label_proba: [0.40, 0.60], position: "after"},
    {node: "72 before", label_proba: [0.72, 0.38], position: "before"},
  ]
}

for(let rec of testRecommendations.predictions){
  rec[testRecommendations.classes[0]] = rec.label_proba[0]
  rec[testRecommendations.classes[1]] = rec.label_proba[1]
}
// console.log(testRecommendations.predictions)

function App() {

  const [recommendations, setRecommendations] = useState(testRecommendations)
  const [currentRec, setCurrentRec] = useState(testRecommendations.entry)
  const [loading, setLoading] = useState(false)
  const [decisionThreshold, setDecisionThreshold] = useState(0.5)
  const [numRecommendations, setNumRecommendations] = useState(20)

  return (
    <div className="App">
      <EntryInput
        setRecommendations={setRecommendations}
        setLoading={setLoading}
        setDecisionThreshold={setDecisionThreshold}
        setCurrentRec={setCurrentRec}
      />

      {
        loading
        &&
        <Loading />
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
            currentRec={currentRec}
            setCurrentRec={setCurrentRec}
            decisionThreshold={decisionThreshold}
            numRecommendations={numRecommendations}
          />
        </div>
      }
    </div>
  );
}

export default App;
