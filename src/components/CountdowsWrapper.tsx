import type { CountdownSettings } from "../types";
import Countdown from "./Countdown";

type CountdowsWrapperProps = {
    countdownList: CountdownSettings[];
};

export default function CountdowsWrapper({
    countdownList,
}: CountdowsWrapperProps) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-32 h-full w-100 max-w-screen-2xl">
            {countdownList.map((countdown) => (
                <Countdown key={countdown.id} countdown={countdown} />
            ))}
        </div>
    );
}
