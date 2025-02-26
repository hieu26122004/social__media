import { useTheme } from "@/components/theme-provider";
import { MoonStar, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";
  const Icon = isDarkMode ? Sun : MoonStar;
  const iconSize = isDarkMode ? "size-[14px]" : "size-3";
  const iconStroke = isDarkMode
    ? "stroke-yellow-400"
    : "stroke-accent-foreground";

  const handleToggle = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <label
      aria-label="Toggle dark mode"
      htmlFor="mode-toggle"
      className="relative inline-block w-14 h-8 cursor-pointer"
    >
      <input
        id="mode-toggle"
        name="mode-toggle"
        type="checkbox"
        className="hidden peer"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <div className="absolute inset-0 w-[54px] h-[32px] bg-primary-600 border border-accent-300 rounded-full transition-colors duration-500 peer-checked:bg-primary" />
      <div
        aria-label="Theme toggle icon"
        className={`absolute top-1 left-1 size-6 bg-accent rounded-full flex items-center justify-center transition-transform duration-500 peer-checked:translate-x-[1.4rem] peer-checked:bg-primary`}
      >
        <Icon className={`${iconSize} ${iconStroke}`} aria-hidden="true" />
      </div>
    </label>
  );
}
