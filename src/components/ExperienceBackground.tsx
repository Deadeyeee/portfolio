"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ExperienceBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* <img
        src="/svg/iStock-1132089008 [Converted].svg"
        alt=""
        className="absolute inset-0 w-full h-auto object-cover object-center opacity-[.5] dark:opacity-[0.08]"
        style={{
          filter: isDarkMode
            ? "brightness(1.5) contrast(1.3) hue-rotate(200deg) saturate(0.6) invert(0.1)"
            : "brightness(0.95) contrast(1.1) saturate(1.3) hue-rotate(-10deg)",
        }}
        aria-hidden="true"
      /> */}
    </div>
  );
};
