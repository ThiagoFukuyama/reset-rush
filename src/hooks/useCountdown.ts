import { useCallback, useEffect, useRef, useState } from "react";

export function useCountdown(
    initialTime: number,
    cb: (() => void) | null = null,
    speed: number = 1000
) {
    const [count, setCount] = useState(initialTime);
    const intervalRef = useRef<number | undefined>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (count > 0) {
                setCount((prev) => prev - 1);
            }
        }, speed);

        if (count === 0) {
            clearInterval(intervalRef.current);
            cb && cb();
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [count, initialTime, speed]);

    const reset = useCallback(() => {
        setCount(initialTime);
    }, [initialTime]);

    const pause = useCallback(() => {
        clearInterval(intervalRef.current);
    }, []);

    return {
        count,
        setCount,
        reset,
        pause,
    };
}
