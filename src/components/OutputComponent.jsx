import { useState } from "react";
import { Square, Circle } from "lucide-react";

export default function OutputComponent(props) {
  const shapes = [
    {
      id: "square",
      style: "rounded-sm ",
      label: "■ Square",
      icon: <Square width={20} />,
    },
    {
      id: "circle",
      style: "rounded-full ",
      label: "● Circle",
      icon: <Circle width={20} />,
    },
  ];
  const [state, setState] = useState("");
  const [currentShape, setCurrentShape] = useState("square");
  const findShape = () => shapes.find((s) => s.id === currentShape);

  return (
    <div className="flex h-fit w-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 shadow-2xl">
      {/* Header */}
      <header className="flex h-12 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4">
        <span className="text-sm font-medium text-zinc-100">
          {props.render.title}
        </span>

        {/* Tool bar Icons */}
        <div className="flex gap-1">
          {shapes.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentShape(s.id)}
              className={`flex h-9 w-9 items-center justify-center rounded border transition-colors
                ${
                  currentShape === s.id
                    ? "border-zinc-500 bg-linear-to-br from-zinc-700 to-zinc-800 text-white shadow-inner shadow-black/50 ring-1 ring-white/10" // Active state
                    : "border-transparent text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200" // Inactive Scene
                }`}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </header>

      {/* The workspace: split into sidebar and canvas */}
      <div className="flex flex-1 overflow-hidden">
          <aside className="w-48 border-r border-zinc-800 bg-zinc-900/50 p-2">
            <div className="flex flex-col gap-1">
              <span className="px-2 py-2 text-xs font-bold uppercase tracking-wider text-zinc-600">
                Explorer
              </span>

              {
                props.render.buttons.map((b)=>(
                  <button
                    key = {b.name}
                    onClick={()=>setState(b.state)}
                    className={`rounded px-2 py-1.5 text-left text-sm  hover:text-zinc-300
                      ${
                        b.state === state 
                          ? "bg-zinc-500 text-zinc-100"
                          : "hover:bg-zinc-800"
                      }`}
                    >
                      {b.name}
                  </button>
                ))
              }
            </div>
          </aside>

          {/* Canvas: fills remaining space */}
          <main className="relative flex flex-1 items-center justify-center bg-zinc-950">
              <div className="text-white block border-gray-500 p-4 min-h-50 w-full ">
                {props.render.output(state,findShape())}
              </div>
          </main>
      </div>
    </div>
  );
}
