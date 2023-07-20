import React from 'react'
// import '/UserList.css';
import UserItem from "./UserItem"


const UsersList = (props) => {
    // if(props.items.length === 0) {
        return (
            <div className="centre">
                <h2>No users found</h2>
            </div>
        );
    };
// };
export default UsersList
