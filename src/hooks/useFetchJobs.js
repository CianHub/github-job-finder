import { useEffect, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make request',
  GET_DATA: 'get data',
  ERROR: 'error',
  HAS_NEXT_PAGE: 'has next page',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
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

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = CORS_URL + 'https://jobs.github.com/positions.json';

export default function useFetchJobs(params, page) {
  useEffect(() => {
    const cancelReqToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    axios
      .get(BASE_URL, {
        cancelToken: cancelReqToken.token,
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      });

    return () => {
      cancelReqToken.cancel();
    };
  }, [params, page]);

  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  console.log(state.error);
  return { jobs: state.jobs, loading: state.loading, error: state.error };
}
