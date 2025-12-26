"use client";
import { House, Search, Settings, User } from "lucide-react";

export default function Home() {
  const icons = [
    { title: "Home", icon: <House className="size-5" /> },
    { title: "Search", icon: <Search className="size-5" /> },
    { title: "Profile", icon: <User className="size-5" /> },
    { title: "Settings", icon: <Settings className="size-5" /> },
  ];

  const handleThemeChange = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-neutral-50 p-4 dark:bg-neutral-950">
      <Pattern />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl transition-colors dark:border-neutral-800 dark:bg-neutral-900">
        {/* Animated Header Section */}
        <div className="relative flex h-32 items-center justify-center gap-6 overflow-hidden bg-orange-600">
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 opacity-20">
            <Pattern />
          </div>

          <div className="animate-me flex gap-8">
            {[...icons, ...icons].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-white/20 p-3 text-white backdrop-blur-sm"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl leading-tight font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            LLMs: Understanding the Future of Text
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            These models are trained on massive datasets to generate human-like
            text. They are versatile tools, revolutionizing how we interact with
            technology through applications like GPT-4 and BERT.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={handleThemeChange}
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 active:scale-95 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Switch Theme
            </button>

            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
              AI Insights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px]"></div>
  );
};
