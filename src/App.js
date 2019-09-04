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

      {
        loading
        &&
        <Loading />
      }
      {
        recommendations
        &&
        <div>
          <SliderGroup setDecisionThreshold={setDecisionThreshold} setNumRecommendations={setNumRecommendations} />
          <RecommendationsDisplay recommendations={recommendations} />
        </div>
      }
    </div>
  );
}

export default App;
