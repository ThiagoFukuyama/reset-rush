import { createContext, useContext, useState } from "react";

type GameOverContext = {
    isGameOver: boolean;
    setGameOver: (isGameOver: boolean) => void;
};

const GameOverContext = createContext<GameOverContext | null>(null);

type GameOverContextProviderProps = {
    children: React.ReactNode;
};

export function useGameOver() {
    const context = useContext(GameOverContext);

    if (!context) {
        throw new Error(
            "GameOverContext can only be used under GameOverContextProvider"
        );
    }

    return context;
}

export function GameOverContextProvider({
    children,
}: GameOverContextProviderProps) {
    const [isGameOver, setGameOver] = useState(false);

    return (
        <GameOverContext.Provider
            value={{
                isGameOver,
                setGameOver,
            }}
        >
            {children}
        </GameOverContext.Provider>
    );
}
