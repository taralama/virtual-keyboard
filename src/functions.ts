import { KeysValue } from "./constants";





export const isInNoIndicator = (keyValueEntered: string) => {

    const NO_INDICATOR_LIST = [
        KeysValue.backspace,
        KeysValue.capsLock,
        KeysValue.space,
        KeysValue.shift,
    ]
    const isInNoIndicatorList = NO_INDICATOR_LIST.some(
        (key) => key == keyValueEntered,
    );

    console.log(isInNoIndicatorList)

    return isInNoIndicatorList
}