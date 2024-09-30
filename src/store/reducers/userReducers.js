import { CREATE_USERS, GET_USERS_ALL } from "../constant/constant";

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {

        case GET_USERS_ALL:

            return {...state,data:action.payload.data};

        case CREATE_USERS:

            return {...state,data:action.payload.data};

        default:
            return state;
    }
}