import React, { createContext, useState } from 'react';
import axios from 'axios';
import { config } from '../config'

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
    const [challenges, setChallenges] = useState([]);

    const fetchChallenges = async () => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}/api/challenges`);
            setChallenges(response.data);
        } catch (error) {
            console.error('Error fetching challenges', error);
        }
    };

    const getChallengeById = async (id) => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}/api/challenges/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching challenge', error);
        }
    };

    const addChallenge = async (challenge) => {
        console.log('addChallenge called');
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/challenges/create-challenge`, challenge);
            setChallenges([...challenges, response.data]);
        } catch (error) {
            console.error('Error adding challenge', error);
        }
    };

    const updateChallenge = async (updatedChallenge) => {
        try {
            const response = await axios.put(`${config.API_BASE_URL}/api/challenges/${updatedChallenge.id}`, updatedChallenge);
            setChallenges(challenges.map(challenge => challenge.id === response.data.id ? response.data : challenge));
        } catch (error) {
            console.error('Error updating challenge', error);
        }
    };

    const joinChallenge = async (challengeId, userId) => {
        try {
            const response = await axios.put(`${config.API_BASE_URL}/api/challenges/${challengeId}/join`, { userId });
            setChallenges(challenges.map(challenge => challenge.id === response.data.id ? response.data : challenge));
        } catch (error) {
            console.error('Error joining challenge', error);
        }
    };




    const deleteChallenge = async (id) => {
        try {
            await axios.delete(`${config.API_BASE_URL}/api/challenges/${id}`);
            setChallenges(challenges.filter(challenge => challenge.id !== id));
        } catch (error) {
            console.error('Error deleting challenge', error);
        }
    };

    return (
        <ChallengeContext.Provider value={{ challenges, fetchChallenges, getChallengeById, addChallenge, updateChallenge, deleteChallenge, joinChallenge }}>
            {children}
        </ChallengeContext.Provider>
    );
};
