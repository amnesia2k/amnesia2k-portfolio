import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="w-[20px] h-[20px] p-5 rounded-full bg-white hover:bg-white shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-black" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-black" />
      )}
    </Button>
  );
}
