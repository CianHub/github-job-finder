import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const Job = ({ job }) => {
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
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Job;
