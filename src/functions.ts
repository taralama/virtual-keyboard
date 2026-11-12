import { KeysValue } from "./constants";





export const isInNoIndicator = (keyValueEntered: string) => {

    const NO_INDICATOR_LIST = [
        KeysValue.backspace,
        KeysValue.capsLock,
        KeysValue.space,
        KeysValue.shift,
    ]
    const isInNoIndicatorList = NO_INDICATOR_LIST.includes(keyValueEntered as typeof NO_INDICATOR_LIST[number])

    console.log(isInNoIndicatorList)

    return isInNoIndicatorList
}