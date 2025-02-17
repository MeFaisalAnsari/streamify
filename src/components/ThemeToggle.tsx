import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex items-center gap-2">
      <Sun className={clsx(!dark && "text-primary fill-primary")} />
      <button
        onClick={() => setDark(!dark)}
        className="w-20 relative h-8 rounded-full bg-foreground/[0.08] cursor-pointer"
      >
        <div
          className={clsx(
            "absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-all",
            { "left-13": dark }
          )}
        ></div>
      </button>
      <Moon className={clsx(dark && "text-primary fill-primary")} />
    </div>
  );
};

export default ThemeToggle;
