export const row1 = [
    {
        label: "Esc",
        value: "esc",
    },
    {
        label: "F1",
        value: "f1",
    },
    {
        label: "F2",
        value: "f2",
    },
    {
        label: "F3",
        value: "f3",
    },
    {
        label: "F4",
        value: "f4",
    },
    {
        label: "F5",
        value: "f5",
    },
    {
        label: "F6",
        value: "f6",
    },
    {
        label: "F7",
        value: "f7",
    },
    {
        label: "F8",
        value: "f8",
    },
    {
        label: "F9",
        value: "f9",
    },
    {
        label: "F10",
        value: "f10",
    },
    {
        label: "F12",
        value: "f12",
    },
    {
        label: "PrtScr",
        value: "prt_scr",
    },
    {
        label: "Delete",
        value: "delete",
    },
] as const;

export const row2 = [
    {
        label: "`",
        value: "`",
    },
    {
        label: "1",
        value: "1",
    },
    {
        label: "2",
        value: "2",
    },
    {
        label: "3",
        value: "3",
    },

    {
        label: "4",
        value: "4",
    },
    {
        label: "5",
        value: "5",
    },
    {
        label: "6",
        value: "6",
    },
    {
        label: "7",
        value: "7",
    },
    {
        label: "8",
        value: "8",
    },
    {
        label: "9",
        value: "9",
    },
    {
        label: "0",
        value: "0",
    },
    {
        label: "-",
        value: "-",
    },
    {
        label: "+",
        value: "+",
    },
    {
        label: "Backspace",
        value: "backspace",
    },
] as const;
export const row3 = [
    {
        label: "Tab",
        value: "tab",
    },
    {
        label: "Q",
        value: "q",
    },
    {
        label: "W",
        value: "w",
    },
    {
        label: "E",
        value: "e",
    },

    {
        label: "R",
        value: "r",
    },
    {
        label: "T",
        value: "t",
    },
    {
        label: "Y",
        value: "y",
    },
    {
        label: "U",
        value: "u",
    },
    {
        label: "I",
        value: "i",
    },
    {
        label: "O",
        value: "o",
    },
    {
        label: "P",
        value: "p",
    },
    {
        label: "{",
        value: "{",
    },
    {
        label: "}",
        value: "}",
    },
    {
        label: "|",
        value: "|",
    },
] as const;
export const row4 = [
    {
        label: "Caps Lock",
        value: "caps_lock",
    },
    {
        label: "A",
        value: "a",
    },
    {
        label: "S",
        value: "s",
    },
    {
        label: "D",
        value: "d",
    },

    {
        label: "F",
        value: "f",
    },
    {
        label: "G",
        value: "g",
    },
    {
        label: "H",
        value: "h",
    },
    {
        label: "J",
        value: "j",
    },
    {
        label: "K",
        value: "k",
    },
    {
        label: "L",
        value: "l",
    },
    {
        label: ":",
        value: ":",
    },
    {
        label: `"`,
        value: `"`,
    },
    {
        label: "Enter",
        value: "enter",
    },

] as const;
export const row5 = [
    {
        label: "Shift",
        value: "shift",
    },
    {
        label: "Z",
        value: "z",
    },
    {
        label: "X",
        value: "x",
    },
    {
        label: "C",
        value: "c",
    },

    {
        label: "V",
        value: "v",
    },
    {
        label: "B",
        value: "b",
    },
    {
        label: "N",
        value: "n",
    },
    {
        label: "M",
        value: "m",
    },
    {
        label: "<",
        value: "<",
    },
    {
        label: ">",
        value: ">",
    },
    {
        label: "?",
        value: "?",
    },
    {
        label: `Shift`,
        value: "shift",
    },


] as const;

export const row6 = [
    {
        label: "Ctrl",
        value: "ctrl",
    },
    {
        label: "Fn",
        value: "fn",
    },
    {
        label: "S",
        value: "s",
    },
    {
        label: "Alt",
        value: "alt",
    },

    {
        label: "",
        value: "space",
    },
    {
        label: "Alt",
        value: "alt",
    },
    {
        label: "Ctrl",
        value: "ctrl",
    },
    {
        label: "",
        value: "space",
    },
    {
        label: "K",
        value: "k",
    },
    {
        label: "L",
        value: "l",
    },
    {
        label: ":",
        value: ":",
    },
    {
        label: `"`,
        value: `"`,
    },
    {
        label: "Enter",
        value: "enter",
    },

] as const;

export const ALL_KEYS = [
    ...row1,
    ...row2,
    ...row3,
    ...row4,
    ...row5,
    ...row6,
].map(key => key.value);

export const MODIFIERS_KEYS = Object.values(ALL_KEYS)

