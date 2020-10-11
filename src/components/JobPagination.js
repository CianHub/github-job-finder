import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const JobPagination = ({ page, setPage }) => {
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev></Pagination.Prev>}
      {page !== 1 && <Pagination.Item>1</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis>1</Pagination.Ellipsis>}
      {page > 2 && <Pagination.Item>{page - 1}</Pagination.Item>}

      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Item>{page + 1}</Pagination.Item>

      <Pagination.Next></Pagination.Next>
    </Pagination>
  );
};

JobPagination.propTypes = {};

export default JobPagination;
