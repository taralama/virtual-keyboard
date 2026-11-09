import type React from "react";
import type { Dispatch, SetStateAction } from "react";

export class KeyFunctionMapper {
    keyEntered: string
    setValue: Dispatch<SetStateAction<string>>;
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>



    constructor(keyEntered: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, setValue: Dispatch<SetStateAction<string>>) {
        this.setValue = setValue
        this.keyEntered = keyEntered
        this.e = e
    }

    backSpaceClicked() {
        this.setValue(prev => prev.slice(0, -1))
    }

    capsLockClicked() {
        this.setValue(prev => prev + this.keyEntered.toUpperCase())
    }
}



