import React from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';

function App() {
  const jobs = useFetchJobs();
  return <div className="App"></div>;
}

export default App;
