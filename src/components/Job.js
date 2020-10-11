import React, { useState } from 'react';
import { Badge, Button, Card, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="">
            <Card.Title>
              {job.title} -{' '}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {job.created_at.toLocaleString()}
            </Card.Subtitle>
            <Badge variant="secondary">{job.type}</Badge>{' '}
            <Badge className="mr-2" variant="secondary">
              {job.location}
            </Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
            </div>
          </div>

          <img
            src={job.company_logo}
            alt={job.company}
            className="d-none d-md-block"
            height="50"
          />
        </div>
        <Card.Text>
          <Button onClick={() => setOpen(!open)} variant="primary">
            View Details
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description}></ReactMarkdown>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
