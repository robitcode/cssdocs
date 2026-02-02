import { useState } from "react"

export default function OutputComponent(props) {
    const shapes = [
        { "id": "square", "style": "rounded-sm h-10", 'label': '■ Square' },
        { "id": "circle", "style": "rounded-full h-10 min-w-10", 'label': '● Circle' },
        { "id": "text", "style": "", 'label': 'Text ' },
        { "id": "numbers", "style": "", 'label': "Numbers " }
    ]
    const [state, setState] = useState('');
    const [currentShape, setCurrentShape] = useState("square");
    const [isOpen, setIsOpen] = useState(false);
    const findShape = () => shapes.find(s => s.id === currentShape)

    return (
        <div className="text-white w-full border-3 border-gray-500 bg-gray-900 h-fit rounded-xl">
            <header className="h-fit flex items-center text-white w-full border-b-2 rounded-tl-xl rounded-tr-xl border-gray-500 px-5 py-3">
                <h1 className="">{props.render.title}</h1>

                <div className="relative min-h-fit min-w-fit ml-auto">
                    {/* Main Button */}
                    <button
                     onClick={()=>setIsOpen(!isOpen)}
                     className="w-full p-2 border-2 rounded text-left justify-between items-center bg-gray-500 dark:bg-gray-800 dark:text-white"
                    >
                        {shapes.find((opt) => opt.id === currentShape)?.label}
                        <span className="ml-2">▼</span>
                    </button>

                    {/* Dropdown list */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-fit mt-1 border rounded shadow-lg bg-white dark:bg-white z-10 overflow-hidden">
                            {
                                shapes.map((s)=>(
                                    <button
                                     key={s.id}
                                     onClick={()=>{
                                        setCurrentShape(s.id)
                                        console.log(s.id);
                                        setIsOpen(false)
                                     }}
                                     className={`w-full text-left px-4 py-2 hover:bg-gray-800
                                     ${currentShape === s.id ? 'bg-gray-500 font-bold':'bg-gray-800'}`}>
                                        {s.label}
                                    </button>
                                ))
                            }
                        </div>
                    )}
                </div>
            </header>

            {/* Column on mobile, Row on md/lg */}
            <div className="flex flex-col md:flex-row w-full">

                {/* Left Row: Menu with buttons! */}
                {/* w-full on mobile, w-1/2 (50%) on desktop */}
                <menu className="flex flex-col p-2 shadow-inner md:border-r-2 md:w-1/2 border-gray-500 w-full h-full">
                    {
                        props.render.buttons.map((b) => (
                            <button
                                key={b.name}
                                className="m-2 rounded-md border-3 border-gray-400 flex text-amber-300 font-mono px-1 py-3 focus:border-blue-400"
                                onClick={() => setState(b.state)}>
                                <p className=" mr-auto ml-1 w-fit">{b.name}</p>
                            </button>
                        ))
                    }
                </menu>

                {/* Right Row: Output area */}
                {/* w-full on mobile, w-1/2 (50%) on desktop */}

                <output className="text-white block border-t-2 border-gray-500 p-4 min-h-50 w-full md:border-0 md:w-1/2">
                    {props.render.output(state,findShape())}
                </output>
            </div>
        </div>
    )
}