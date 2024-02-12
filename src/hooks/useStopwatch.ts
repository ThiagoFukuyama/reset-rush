import { useCallback, useEffect, useRef, useState } from "react";

export function useStopwatch() {
    const [isRunning, setIsRunning] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(Date.now() - elapsedTime);

    const intervalRef = useRef<number | undefined>();

    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const start = useCallback(() => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }, [elapsedTime]);

    const stop = useCallback(() => {
        setIsRunning(false);
    }, []);

    const reset = useCallback(() => {
        setElapsedTime(0);
        stop();
    }, [stop]);

    return { elapsedTime, start, stop, reset };
}
