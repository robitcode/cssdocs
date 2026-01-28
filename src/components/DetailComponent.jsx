export default function DetailComponent(props) {
    return (
        <div className="bg-gray-300  border-gray-900 rounded-xl flex flex-col justify-evenly font-bold font-mono p-4">
            <header className="h-fit flex">
                <p className="ml-2 font-bold font-sans">
                    {props.title}
                </p>
                <button className="ml-auto p-1 w-fit h-6 bg-zinc-300 hover:bg-zinc-400 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="w-4 h-4"
                    >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </header>

            <main className="w-full  bg-white border-l-4 rounded-r-md mt-2 overflow-hidden py-2 border-green-600">
                <pre className="px-2 font-bold font-mono text-sm text-gray-700 whitespace-pre-line">
                    {props.code}
                </pre>
            </main>
        </div>
    )
}