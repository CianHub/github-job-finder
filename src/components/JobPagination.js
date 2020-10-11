import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const JobPagination = ({ page, setPage, hasNextPage }) => {
  const adjustPage = (amount) => {
    setPage((prevPage) => prevPage + amount);
  };

  return (
    <Pagination>
      {page > 1 && (
        <Pagination.Prev onClick={() => adjustPage(-1)}> </Pagination.Prev>
      )}
      {page !== 1 && (
        <Pagination.First onClick={() => setPage(1)}></Pagination.First>
      )}
      {page > 2 && <Pagination.Ellipsis></Pagination.Ellipsis>}
      {page > 2 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>
          {' '}
          {page - 1}
        </Pagination.Item>
      )}

      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {page + 1}
        </Pagination.Item>
      )}

      {hasNextPage && (
        <Pagination.Next onClick={() => adjustPage(1)}></Pagination.Next>
      )}
    </Pagination>
  );
};

JobPagination.propTypes = {};

export default JobPagination;
