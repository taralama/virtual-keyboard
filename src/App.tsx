import { useState } from "react";
import "./App.css";
import ClickedIndicator from "./components/ClickedIndicator";
import { KeysValue } from "./constants";
import { isInNoIndicator } from "./functions";
import { KeyFunctionMapper } from "./helper";
import { row1, row2, row3, row4, row5, row6 } from "./keys";

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
            <div className="min-h-dvh w-full bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 p-4">
                <div className="flex min-h-[calc(100dvh-2rem)] flex-col items-center justify-end gap-y-20 pb-40">
                    <section className="w-full max-w-250 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl shadow-black/20">
                        <div className="mb-3 flex items-center justify-between gap-4">
                            <label
                                htmlFor="keyboard-output"
                                className="text-xs font-semibold tracking-[0.2em] text-slate-400"
                            >
                                YOUR TEXT
                            </label>
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                                    isCapsLockOn
                                        ? "bg-emerald-400/15 text-emerald-300"
                                        : "bg-slate-800 text-slate-500"
                                }`}
                            >
                                CAPS {isCapsLockOn ? "ON" : "OFF"}
                            </span>
                        </div>
                        <input
                            id="keyboard-output"
                            type="text"
                            value={value}
                            placeholder="Start typing..."
                            aria-label="Keyboard output"
                            className="h-16 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-2xl text-white shadow-inner outline-none transition placeholder:text-slate-600 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                            readOnly
                        />
                    </section>
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
                                            className={`h-2 w-2 ${!isCapsLockOn ? "bg-black" : "bg-white"} rounded-full absolute right-2 top-4 border border-white`}
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
