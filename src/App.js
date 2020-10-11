import React from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error try reloading...</h1>}
      {jobs && jobs.length}
    </Container>
  );
}

export default App;
