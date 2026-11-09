import { useState } from "react";
import "./App.css";
import { row1, row2, row3, row4, row5, row6 } from "./keys";
import { KeyFunctionMapper } from "./helper";
import { KeysValue } from "./constants";
import ClickedIndicator from "./components/ClickedIndicator";
import { isInNoIndicator } from "./functions";

function App() {
    const [value, setValue] = useState("");
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const handleKeyClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        keyEntered: string,
        keyValue: string,
    ) => {
        const formattedKey = isCapsLockOn
            ? keyEntered.toUpperCase().trim()
            : keyEntered.toLowerCase().trim();

        const mapper = new KeyFunctionMapper(formattedKey, e, setValue);

        if (keyValue === KeysValue.backspace) {
            return mapper.backSpaceClicked();
        }

        if (keyValue === KeysValue.capsLock) {
            return setIsCapsLockOn((prev) => !prev);
        }

        setValue((prev) => prev + formattedKey);
    };

    return (
        <>
            <div className="h-dvh p-4 w-full ">
                <div className="pb-40 flex flex-col gap-y-20 justify-end items-center border  h-full">
                    <input
                        type="text"
                        value={value}
                        className="text-3xl border rounded-2xl h-10 w-full"
                        readOnly
                    />
                    <div className="  max-w-250 border border-black p-2 rounded-2xl flex flex-col gap-y-2">
                        <div className="flex  gap-2">
                            {row1?.map((key, i) => (
                                <button
                                    key={i}
                                    className="cursor-pointer relative border border-b-amber h-8 w-16 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow "
                                    onClick={(e) =>
                                        handleKeyClick(e, key.label, key.value)
                                    }
                                >
                                    {/* <ClickedIndicator keyEntered={key.label} /> */}
                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <div className="flex  gap-2 ">
                            {row2?.map((key, i) => (
                                <button
                                    key={i}
                                    className="group cursor-pointer relative border border-b-amber h-12 w-16 last:w-25 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow "
                                    onClick={(e) =>
                                        handleKeyClick(e, key.label, key.value)
                                    }
                                >
                                    {!isInNoIndicator(key.value) && (
                                        <ClickedIndicator
                                            className="invisible group-active:visible transition-transform duration-300"
                                            keyEntered={key.label}
                                            keyValueEntered={key.value}
                                        />
                                    )}

                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 ">
                            {row3?.map((key, i) => (
                                <button
                                    key={i}
                                    className="cursor-pointer relative border border-b-amber h-12 w-16 first:w-25 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow"
                                    onClick={(e) =>
                                        handleKeyClick(e, key.label, key.value)
                                    }
                                >
                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 ">
                            {row4?.map((key, i) => (
                                <button
                                    key={i}
                                    className="cursor-pointer relative border border-b-amber h-12 w-16 first:w-25 last:w-25 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow"
                                    onClick={(e) =>
                                        handleKeyClick(e, key.label, key.value)
                                    }
                                >
                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>

                                    {key.value == "caps_lock" && (
                                        <div
                                            className={`h-2 w-2 ${isCapsLockOn ? "bg-black" : "bg-white"} rounded-full absolute right-2 top-4 border border-white`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 ">
                            {row5?.map((key, i) => (
                                <button
                                    key={i}
                                    className="cursor-pointer relative border border-b-amber h-12 w-16 first:w-32 last:w-32 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow"
                                    onClick={(e) => {
                                        const value =
                                            e.currentTarget?.innerText;

                                        setValue((prev) => prev + value);
                                    }}
                                >
                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 ">
                            {row6?.map((key, i) => (
                                <button
                                    key={i}
                                    className="cursor-pointer relative border border-b-amber h-12 w-16 first:w-32 last:w-32 text-black p-1 rounded-sm hover:bg-amber-100 transition-colors duration-400 key-shadow nth-[5]:w-70"
                                    onClick={(e) => {
                                        const value =
                                            e.currentTarget?.innerText;

                                        setValue((prev) => prev + value);
                                    }}
                                >
                                    <p className="absolute top-4 leading-0 text-sm">
                                        {key.label}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
