import DetailComponent from "../../components/DetailComponent";

const code = ``

export default function AlignItems() {
    return (
        <div className="min-h-screen w-full space-y-6">
            <DetailComponent title="align-items" code={code} />

            <div className="text-white w-full border border-x-2 border-slate-950 bg-gray-900 h-fit rounded-xl">
                <header className="h-fit text-white w-full border-2 rounded-tl-xl rounded-tr-xl border-gray-500 px-5 py-3">
                    CSS Demo: align-items
                </header>

                {/* Column on mobile, Row on md/lg */}
                <div className="flex flex-col md:flex-row w-full">

                    {/* Left Row: Menu with buttons! */}
                    {/* w-full on mobile, w-1/2 (50%) on desktop */}
                    <menu className="flex flex-col p-2 shadow-inner border-gray-500 border-2 
                        overflow-y-auto w-full md:w-1/2 h-full">

                        <button className="my-1 rounded-md border-3 border-gray-400 flex text-amber-300 font-mono px-1 py-3 focus:border-blue-400">
                            <p className=" mr-auto ml-1 w-fit">align-items: stretch;</p>
                        </button>
                        <button className="my-1 border-3 rounded-md border-gray-400 flex text-amber-300 font-mono px-1 py-3 outline-none focus:border-blue-400">
                            align-items: center;
                        </button>
                        <button className="my-1 border-3 rounded-md border-gray-400 flex text-amber-300 font-mono px-1 py-3 outline-none focus:border-blue-400">
                            <p className="mr-auto ml-1 w-fit">align-items: start;</p>
                        </button>
                        <button className="my-1 border-3 rounded-md border-gray-400 flex text-amber-300 font-mono px-1 py-3 outline-none focus:border-blue-400">
                            <p className="mr-auto ml-1 w-fit">align-items: end;</p>
                        </button>
                    </menu>

                    {/* Right Row: Output area */}
                    {/* w-full on mobile, w-1/2 (50%) on desktop */}

                    <output className="text-white border-t-2 border-gray-500 p-4 min-h-50 w-full md:w-1/2">
                        <div>
                            
                        </div>
                    </output>
                </div>
            </div>
        </div>


    )
}