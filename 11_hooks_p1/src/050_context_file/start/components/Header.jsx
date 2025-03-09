import { useContext } from "react";
import { MyTheme, ThemeContext, useTheme } from "./ThemeProvider";

const Header = () => {
  const THEMES = useContext(MyTheme);
  const [theme, setTheme] = useTheme();
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => (
        <label key={_theme}>
          <input
            type="radio"
            value={_theme}
            checked={_theme === theme}
            onChange={changeTheme}
          />
          {_theme}
        </label>
      ))}
    </header>
  );
};

export default Header;
