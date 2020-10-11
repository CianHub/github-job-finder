import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';

function App() {
  const [params, setParams] = useState();
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error try reloading...</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
