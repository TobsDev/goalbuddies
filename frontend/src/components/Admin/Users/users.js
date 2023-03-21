import React, { useContext, useEffect } from 'react';
import './users.scss';
import { AdminContext } from '../../../Context/adminContext'

const Users = () => {
    const { allUsers, fetchAllUsers } = useContext(AdminContext);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    if (!allUsers) {
        return <div>Loading...</div>;
    }

    return (
        <div className="users">
            <h1>Users</h1>
            <p className="users__count">Total Users: {allUsers.length}</p>
            {allUsers.map((user) => (
                <div key={user.id}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Created At:</strong> {user.createdAt}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;
