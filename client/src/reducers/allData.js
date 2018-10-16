import {
    FETCH_ALL_DATA_SUCCESS,
    FETCH_ALL_DATA_ERROR
} from '../actions/allData';

const initialState = {
    data: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ALL_DATA_SUCCESS) {
        console.log(action,state);
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_ALL_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}