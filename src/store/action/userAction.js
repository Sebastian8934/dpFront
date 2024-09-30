import axios from 'axios';
import config from "../constant/services.json";
// import { CREATE_USERS } from '../constant/constant';

export const usersAllService = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.urlDev);
        let result = res.data.response;
        return result;

    } catch (error) {
        console.log(error);
    }
};

export const usersCreateService = (body) => async (dispatch, getState) => {
    try {
        const res = await axios.post(config.urlDev,body);
        let result = res;
        return result;

    } catch (error) {
        console.log(error);
    }
};

export const deleteUserService = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.delete(config.urlDev + id);
        let result = res.data;
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};

// export const getRoleAllService = () => async (dispatch, getState) => {
//     try {
//         const res = await axios.get(config.urlProd+config.role.urlRole);
//         let result = res.data.response.response;
//         if (res.data.response.status === 200) {
//             dispatch({
//                 type: GET_ROLE_ALL,
//                 payload: { data: result }
//             });
//         } 
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const createRoleService = (body) => async (dispatch, getState) => {
//     try {
//         const res = await axios.post(config.urlProd+config.role.urlRole,body);
//         let result = res.data;
//         return result;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// };

// export const updateRoleService = (body) => async (dispatch, getState) => {
//     try {
//         const res = await axios.put(config.urlProd+config.role.urlRole + body.id,body);
//         let result = res.data;
//         return result; 
//     } catch (error) {
//         console.log(error);
//     }
// };

