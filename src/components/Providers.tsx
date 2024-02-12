import { GameOverContextProvider } from "../context/GameOverContext";
import { TimeScoreContextProvider } from "../context/TimeScoreContext";

type ProviderProps = {
    children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
    return (
        <>
            <TimeScoreContextProvider>
                <GameOverContextProvider>{children}</GameOverContextProvider>
            </TimeScoreContextProvider>
        </>
    );
}
