import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import JobPagination from './components/JobPagination';
import SearchForm from './components/SearchForm';

function App() {
  const [params, setParams] = useState({ description: '', location: '' });
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Job Finder</h1>
      <SearchForm
        params={params}
        onParamChange={handleParamChange}
      ></SearchForm>
      <JobPagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      ></JobPagination>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error try reloading...</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobPagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      ></JobPagination>
    </Container>
  );
}

export default App;
