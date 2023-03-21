import React, { useState, useContext } from 'react';
import { ChallengeContext } from '../../../Context/challengeContext';
import { UserContext } from '../../../Context/userContext';
import axios from 'axios';
import { config } from '../../../config';
import { useNavigate } from 'react-router-dom';


const CreateChallengeForm = () => {
    const { addChallenge } = useContext(ChallengeContext);
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [owner, setOwner] = useState([]);
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setOwner(user.id);

        try {
            const newChallenge = { title, description, startDate, endDate, owner };
            const response = await axios.post(
                `${config.API_BASE_URL}/api/challenges/create-challenge`,
                newChallenge
            );

            // Add the created challenge to the ChallengeContext
            addChallenge(response.data);

            // Reset the form fields
            setTitle('');
            setDescription('');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating challenge:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="startDate">Start Date</label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="endDate">End Date</label>
            <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            

            <button type="submit">Create Challenge</button>
        </form>
    );
};

export default CreateChallengeForm;
