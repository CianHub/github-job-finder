import React from 'react';
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return <Container></Container>;
}

export default App;
