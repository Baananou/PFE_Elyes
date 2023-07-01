import React from 'react';
import { useQuery } from 'react-query';
import axiosClient from '../axiosClient'; // Import the axiosClient

interface ButtonDisplayProps {
    keyParam: string;
}

const ButtonDisplay: React.FC<ButtonDisplayProps> = ({ keyParam }) => {
    const { data, error, isLoading } = useQuery(['data', keyParam], async () => {
        try {
            const response = await axiosClient.get(`/data?key=${keyParam}`); // Use axiosClient instead of fetch
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data');
        }
    }, {
        cacheTime: 0, // Disable caching
        staleTime: 1, // Set stale time to 10 seconds (adjust as needed)
    });

    if (error) {
        return <div>Error: Something went wrong.</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const value = data ?? null;
    const buttonColor = value ? 'green' : 'red';

    return (
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <div
                style={{
                    width: '200px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    backgroundColor: buttonColor,
                    color: 'white',
                }}
                className="text-2xl"
            >
                {keyParam}
            </div>
        </div>
    );
};

export default ButtonDisplay;
