import React from "react";

type ThemeContextProp = {
    theme:string;
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextProp>({
    theme:"light",
    toggleTheme: () => {}

});

export default ThemeContext;