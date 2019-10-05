import {get_store_data, get_store_data_fail} from '../Actions/ActionTypes';

export default (state = {storeData: []}, action) => {
    switch (action.type) {
        case get_store_data:
        return {...state, storeData: action.payload}

        case get_store_data_fail:
        return {...state, fail: action.error}

        default:
        return state;
    }
}