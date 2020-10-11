import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState();
  const [page, setPage] = useState(1);

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
