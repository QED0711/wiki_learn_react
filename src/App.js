import React, { useState } from 'react';
import './App.css';
import EntryInput from './components/EntryInput';
import RecommendationsDisplay from './components/RecommendationsDisplay';
import Loading from './components/Loading';
import SliderGroup from './components/SliderGroup';

function App() {

  const [recommendations, setRecommendations] = useState(null)
  const [loading, setLoading] = useState(false)
  const [decisionThreshold, setDecisionThreshold] = useState(0.5)
  const [numRecommendations, setNumRecommendations] = useState(20)

  return (
    <div className="App">
      <EntryInput setRecommendations={setRecommendations} setLoading={setLoading} />
      {decisionThreshold}
      <br/>
      {Math.round(numRecommendations, 0)}
      <SliderGroup
        domain={[0, 1]}
        values={[0.5]}
        step={0.01}
        stateConnection={setDecisionThreshold}
      />
      <SliderGroup
        domain={[1, 100]}
        values={[20]}
        step={1}
        stateConnection={setNumRecommendations}
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
          <RecommendationsDisplay recommendations={recommendations} />
        </div>
      }
    </div>
  );
}

export default App;
