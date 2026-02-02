import { useState } from "react"

export default function DetailComponent(props) {
    const shapes = [
        { "id": "square", "style": "rounded-sm" },
        { "id": "circle", "style": "rounded-full" },
        { "id": "text", "style": "" }
    ]
    const [shape, setShape] = useState("square");
    return (
        <div className="bg-gray-300  border-gray-900 dark:bg-gray-700 rounded-xl flex flex-col justify-evenly font-bold font-mono p-4">
            <header className="h-fit flex">
                <p className="ml-2 dark:text-gray-300 font-bold font-sans">
                    {props.title}
                </p>
            </header>

            <main className="w-full  bg-white border-l-4 rounded-r-md mt-2 overflow-hidden py-2 border-green-600">
                <pre className="px-2 font-bold font-mono text-sm text-gray-700 whitespace-pre-line">
                    {props.code}
                </pre>
            </main>
        </div>
    )
}