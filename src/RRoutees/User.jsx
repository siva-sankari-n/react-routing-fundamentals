import React from 'react';
import { useParams } from 'react-router-dom';

function User (){

    const {id} =useParams()

    return (
        <div>
            <h1>User</h1>
            <p>User Id is <span>{id}</span></p>
        </div>
    )
}

export default User;