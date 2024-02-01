import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children?: ReactNode }) => {
    return <p className="text-sm font-bold text-red-500">{children}</p>;
};

export default ErrorMessage;
