import { createContext, useContext, useState } from "react";

type TimeScoreContext = {
    score: string;
    setScore: (score: string) => void;
};

const TimeScoreContext = createContext<TimeScoreContext | null>(null);

type TimeScoreContextProviderProps = {
    children: React.ReactNode;
};

export function useTimeScore() {
    const context = useContext(TimeScoreContext);

    if (!context) {
        throw new Error(
            "TimeScoreContext can only be used under TimeScoreContextProvider"
        );
    }

    return context;
}

export function TimeScoreContextProvider({
    children,
}: TimeScoreContextProviderProps) {
    const [score, setScore] = useState("0");

    return (
        <TimeScoreContext.Provider
            value={{
                score,
                setScore,
            }}
        >
            {children}
        </TimeScoreContext.Provider>
    );
}
