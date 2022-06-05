import {
    GET_USER,
    GET_ALL_USERS,
    GET_ALL_USERS_ERROR,
    GET_ALL_FRIENDS
} from "../types";

import axios from 'axios';
import axiosConfig from "../config/index";

export function getDataUser(user){
    return (dispatch) => {
        dispatch(getUser(user))
    }
}
export function getAllUsers(){
    return async (dispatch) => {
        try{
            const response = await axios.get("http://localhost:8000/getAllUsers", axiosConfig.config);
            const array = response.data.users.data.filter((user) => response.data.friends.findIndex(friend => friend.id_friend === user.id || user.id === response.data.id_user) == -1);
            if(response.data.friends.length <= 0){
                const array = response.data.users.data.filter(user => user.id !== response.data.id_user);
                dispatch(getAllUser(array));
                dispatch(getAllFriends(response.data.friends));
                return;
            }
            dispatch(getAllUser(array));
            dispatch(getAllFriends(response.data.friends));
        }catch(err){
            dispatch(getAllUserError());
            setTimeout(() =>  {
                dispatch(getAllUserError(false));
            },3000)
        }       
    }
}
export function newFriend(user){
    return async (dispatch) => {
        try{
            const response = await axios.post("http://localhost:8000/newfriend", {user}, axiosConfig.config);
            let userslist = [];
            console.log(response.data.friends);
            if(response.data.friends.length < 0){
                console.log("Entra");
                const array = response.data.users.data.filter(user => user.id !== response.data.id_user);
                dispatch(getAllUser(array));
                dispatch(getAllFriends(response.data.friends));
                return;
            }
            const array = response.data.users.data.filter((user) => response.data.friends.findIndex(friend => friend.id_friend === user.id || user.id === response.data.id_user) == -1);
            dispatch(getAllUser(array));
            dispatch(getAllFriends(response.data.friends));
        }catch(err){

        }
        
    }
}
export function deleteFriend(idfriend){
    return async (dispatch) => {
        const response = await axios.post("http://localhost:8000/deletefriend", {idfriend}, axiosConfig.config);
        try{
            const response = await axios.get("http://localhost:8000/getAllUsers", axiosConfig.config);
            const array = response.data.users.data.filter((user) => response.data.friends.findIndex(friend => friend.id_friend === user.id || user.id === response.data.id_user) == -1);
            if(response.data.friends.length <= 0){
                const array = response.data.users.data.filter(user => user.id !== response.data.id_user);
                dispatch(getAllUser(array));
                dispatch(getAllFriends(response.data.friends));
                return;
            }
            dispatch(getAllUser(array));
            dispatch(getAllFriends(response.data.friends));
        }catch(err){
            dispatch(getAllUserError());
            setTimeout(() =>  {
                dispatch(getAllUserError(false));
            },3000)
        }    
    
    }
}

const getUser = user => ({
    type:GET_USER,
    payload:user
})

const getAllUser = users => ({
    type:GET_ALL_USERS,
    payload:users
});

const getAllUserError = (state = true) => ({
    type:GET_ALL_USERS_ERROR,
    payload:state
});

const getAllFriends = (friends) => ({
    type:GET_ALL_FRIENDS,
    payload:friends
});
