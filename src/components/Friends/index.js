import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { getAllUsers, newFriend, deleteFriend } from "../../actions/userActions";

import "./style.css";

const Friends = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        const dataUsers = () => dispatch(getAllUsers());
        dataUsers();
    }, []);

    const newFriendPost = friend => dispatch(newFriend(friend));
    const deletedFriend = friend => dispatch(deleteFriend(friend));


    const userState = useSelector(state => state);

    const newPostFriend = (friend) => {
        userState.user.users.map(user => {
            if(user.id == friend){
                newFriendPost(user);
                return;
            }
        })
    }
    const deleteFriends = (id) => {
        deletedFriend(id)
    }


    return ( 
        <div className="friends">
            <div className="list">
                {
                    userState.user.users.map(user => {
                        return(
                        <div className="userlist" key={user.id}>
                            <div className="username">{user.nombre}</div>
                            <div className="adduser" friend={user.id} onClick={(e) => newPostFriend(e.target.getAttribute("friend"))}>+</div>
                        </div>

                        );
                    })
                }
                
               
                
            </div>
            <div className="list">
                {
                    userState.user.amigos.map(user => {
                        return(
                        <div className="userlist" key={user.id_friend}>
                            <div className="username">{user.name_friend}</div>
                            <div className="adduser" friend={user.id_friend} onClick={(e) => deleteFriends(e.target.getAttribute("friend"))}>X</div>
                        </div>

                        );
                    })
                }
            </div>
        </div>
     );
}
 
export default Friends;