import React from 'react';
import { useQuery } from 'react-query';
import axiosClient from '../axiosClient'; // Import the axiosClient
import Image from 'next/image';

interface AlertDisplayProps {
    keyParam: string;
}

const AlertDisplay: React.FC<AlertDisplayProps> = ({ keyParam }) => {
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
    const color = value ? 'green' : 'red';

    return (
        <div className='flex items-center'>
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: color,
                }}
            />
            <div className='flex flex-col items-center'>
                <h1 className='font-bold'>{keyParam}</h1>
                <Image
                    src={"/tapis.png"}
                    alt={"logo"}
                    width={100}
                    height={100}
                />
            </div>

        </div>
    );
};

export default AlertDisplay;
