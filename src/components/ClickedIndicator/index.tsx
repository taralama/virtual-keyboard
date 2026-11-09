import type { HTMLAttributes } from "react";

interface IndicatorProps {
    keyEntered: string;
    keyValueEntered: string;
}

const ClickedIndicator = ({
    keyEntered,
    ...rest
}: IndicatorProps & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`h-10 w-10 -top-12 left-2 bg-white border border-black rounded-t-xs rounded-b-full absolute ${rest.className}`}
        >
            <p className="text-black! font-bold text-2xl"> {keyEntered}</p>
        </div>
    );
};

export default ClickedIndicator;
