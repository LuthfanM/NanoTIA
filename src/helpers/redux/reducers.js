import { SET_LIST_DATA } from "./types";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_LIST_DATA:            
            return {
                result: action.data
            }   
        default:
            return state
    }
}