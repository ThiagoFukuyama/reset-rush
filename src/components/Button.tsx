import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            className={`bg-blue-700 hover:bg-blue-800 text-xl px-5 py-2 text-white rounded-3xl italic ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
