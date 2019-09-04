import React, { useState } from 'react';
import './App.css';
import EntryInput from './components/EntryInput';
import RecommendationsDisplay from './components/RecommendationsDisplay';

function App() {
  
  const [recommendations, setRecommendations] = useState(null)

  return (
    <div className="App">
      <EntryInput setRecommendations={setRecommendations}/>
      {
        recommendations
        &&
        <RecommendationsDisplay recommendations={recommendations}/>
      }
    </div>
  );
}

export default App;
