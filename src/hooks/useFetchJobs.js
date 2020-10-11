import { useEffect, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make request',
  GET_DATA: 'get data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };

    default:
      return state;
  }
}

const BASE_URL = 'https://jobs.github.com/positions.json';

export default function useFetchJobs(params, page) {
  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios.get(BASE_URL, { params: { markdown: true, page: page, ...params } });
  }, [params, page]);

  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
  return { jobs: [], loading: false, error: false };
}
