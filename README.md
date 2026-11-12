# Virtual Keyboard

An interactive on-screen virtual keyboard web application built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Features

- **Full Multi-Row Layout**: 6 distinct keyboard rows representing:
  - Function keys row (`Esc`, `F1`–`F12`, `PrtScr`, `Delete`)
  - Number & symbol row (`~` to `+`, `Backspace`)
  - QWERTY row (`Tab`, `Q`–`P`, `{}|`)
  - Home row (`Caps Lock`, `A`–`L`, `Enter`)
  - Bottom letter row (`Shift`, `Z`–`M`, punctuation)
  - Navigation & modifier row (`Ctrl`, `Fn`, `Alt`, `Space`)
- **Caps Lock Toggle**: Dynamic uppercase/lowercase character conversion with visual LED status indicator.
- **Backspace & Input Management**: Character-by-character deletion and instant text concatenation using helper handlers.
- **Key Visual Feedback**: Interactive click states, realistic key shadows, and pop-up click indicators (`ClickedIndicator`).
- **Live Output Screen**: Dedicated read-only text viewer showcasing typed text with live character reflection.
- **Modern Dark UI**: Styled using Tailwind CSS v4 featuring radial gradients and realistic physical keyboard depth.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting**: ESLint

---

## Project Structure

```text
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Images and SVG assets
│   ├── components/
│   │   ├── ClickedIndicator/ # Key-press pop-up bubble preview
│   │   └── row/              # Row wrapper component
│   ├── App.tsx             # Main application layout and keyboard rendering
│   ├── constants.ts        # Keyboard key action constants
│   ├── functions.ts        # Indicator exclusion helper logic
│   ├── helper.ts           # KeyFunctionMapper dispatch class
│   ├── index.css           # Global Tailwind and custom key styles
│   ├── keys.ts             # Keyboard row layouts and key definitions
│   └── main.tsx            # Application entry point
├── package.json            # Scripts and dependencies
└── vite.config.ts          # Vite configuration
