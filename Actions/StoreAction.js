import {get_store_data, get_store_data_fail} from './ActionTypes';
import {getStoreData} from '../StoreAPI';

export const getDataAction = () => {
    return async (dispatch) => {
        try {
            const result = await getStoreData();
            debugger
            if (result.error) {
                dispatch({type: get_store_data_fail, error: result.error})
                return
            }
            dispatch({type: get_store_data, payload: result})
        } catch (error) {
            dispatch({type: get_store_data_fail, error: error.message})
        }
    }
}