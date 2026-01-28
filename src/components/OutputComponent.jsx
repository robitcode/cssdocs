import { useState } from "react"

export default function OutputComponent(props) {
    const [state,setState] = useState('');
    return (
        <div className="text-white w-full border-3 overflow-hidden border-gray-500 bg-gray-900 h-fit rounded-xl">
            <header className="h-fit text-white w-full border-b-2 rounded-tl-xl rounded-tr-xl border-gray-500 px-5 py-3">
                {props.render.title}
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
                            onClick={()=>setState(b.state)}>
                                <p className=" mr-auto ml-1 w-fit">{b.name}</p>
                            </button>
                        ))
                    }
                </menu>

                {/* Right Row: Output area */}
                {/* w-full on mobile, w-1/2 (50%) on desktop */}

                <output className="text-white block border-t-2 border-gray-500 p-4 min-h-50 w-full md:border-0 md:w-1/2">
                    {props.render.output(state)}
                </output>
            </div>
        </div>
    )
}