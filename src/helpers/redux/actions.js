import { SET_LIST_DATA } from "./types";

export const nanotiaDataActionList = (data) => dispatch => {
    dispatch({
        type: SET_LIST_DATA,
        data: data
    })
}