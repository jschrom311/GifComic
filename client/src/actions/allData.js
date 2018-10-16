import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_ALL_DATA_SUCCESS = 'FETCH_ALL_DATA_SUCCESS';
export const fetchallDataSuccess = data => ({
    type: FETCH_ALL_DATA_SUCCESS,
    data
});

export const FETCH_ALL_DATA_ERROR = 'FETCH_ALL_DATA_ERROR';
export const fetchallDataError = error => ({
    type: FETCH_ALL_DATA_ERROR,
    error
});

export const fetchallData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/allcards`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchallDataSuccess(data)))
        .catch(err => {
            dispatch(fetchallDataError(err));
        });
};
