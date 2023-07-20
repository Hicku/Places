import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
 
    const users = [

        {
            id: "u1", 
            name: "Max Shcwartz", 
            image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg", 
            places: 3
        }]; 

  return (
     <UsersList/>
  );
}

export default Users;