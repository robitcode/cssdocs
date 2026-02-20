import { useState } from "react";
import "./App.css";

import DetailComponent from "./components/DetailComponent";
import HeaderComponent from "./components/HeaderComponent";
import AlignItems from "./guide/box-positioning/AlignItems";
import AlignContent from "./guide/box-positioning/AlignContent";
import JustifyContent from "./guide/box-positioning/JustifyContent";
import JustifyItems from "./guide/box-positioning/JustifyItems";
import JustifySelf from "./guide/box-positioning/JustifySelf";
import FlexGrow from "./guide/box-positioning/FlexGrow";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState("justify-item");
  const components = [
    { id: "align-items", name: "Align-Items", components: <AlignItems /> },
    {
      id: "align-content",
      name: "Align-Content",
      components: <AlignContent />,
    },
    {
      id: "justify-content",
      name: "Justify-Content",
      components: <JustifyContent />,
    },
    { id: "justify-item", name: "Justify-Item", components: <JustifyItems /> },
    { id: "justify-self", name: "Justify-Self", components: <JustifySelf /> },
    { id: "flex-grow", name: "Flex-Grow", components: <FlexGrow /> },
  ];

  const Preview = components.find((c) => c.id === selected)?.components;
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log("dark mode:", darkMode);
  };
  return (
    <div
      className={`${darkMode ? "dark" : ""} flex h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans `}
    >
      {/* Sidebar */}
      <aside
        className={`h-screen transition-all duration-300 ease-in-out w-56 z-10`}
      >
        <nav className="h-full flex flex-col bg-white dark:bg-[#0B0F19] border-r border-slate-200 dark:border-slate-800/60 shadow-sm">
          {/* Logo / Toggle Area */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <div
              className={`font-extrabold text-xl tracking-tight text-indigo-600 dark:text-indigo-500 overflow-hidden transition-all`}
            >
              CSS Docs
            </div>

            <button
              onClick={() => toggleTheme()}
              className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              {/* Toggle Icon */}
              {darkMode ? (
                /* Sun Icon (Show this when Dark Mode is ON) */
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                /* Moon Icon (Show this when Dark Mode is OFF) */
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => setSelected(component.id)}
                className={`w-full p-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border
                        ${
                          selected == component.id
                            ? "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-500/20 shadow-sm"
                            : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800/30 dark:hover:text-slate-200 dark:text-slate-400"
                        }`}
              >
                {component.name}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* Preview Pane */}
      <main className="flex-1 flex flex-col overflow-hidden dark:bg-[#0B0F19] transition-colors duration-300">
        <header className="h-16 bg-white border-b border-zinc-200  flex items-center px-8 justify-between dark:bg-slate-900 dark:border-slate-800">
          <span className="text-sm font-bold text-zinc-500 dark:text-slate-400">
            Previewing:{" "}
            <span className="font-bold text-zinc-900 dark:text-white">
              {selected}
            </span>
          </span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_10px_rgba(244,63,94,0.2)]" />
            <div className="w-3 h-3 rounded-full bg-amber-400/90 shadow-[0_0_10px_rgba(251,191,36,0.2)]" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
          </div>
        </header>

        <section className="flex-1 overflow-auto p-12 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="max-w-5xl mx-auto">
            {Preview || (
              <div className="flex h-64 items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl text-slate-400 dark:text-slate-600 font-medium">
                Select a property from the sidebar
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
