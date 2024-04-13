import React, { useState, useEffect } from "react";

interface Props {
    initialSeconds: number;
}

const CountdownTimer: React.FC<Props> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    clearInterval(intervalId); // Stop the timer when it reaches zero
                    return 0;
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [initialSeconds]); // Re-run effect if initialSeconds change

    // Format seconds into HH:MM:SS
    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="text-center">
            <p className="font-semibold">{formatTime(seconds)}</p>
        </div>
    );
};

export default CountdownTimer;
