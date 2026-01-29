export default function HeaderComponent(props) {
    return (
        <div className="h-fit flex w-full border-b-6 border-slate-800">
            <div className="flex flex-col w-full gap-1">

                <h1 className="text-4xl font-semibold font-serif">
                    {props.header.title}
                </h1>

                <div className="flex items-center mr-4 mb-4">
                    {props.header.topics && (
                        <div className="mr-auto">
                            <p className="font-bold font-sans mt-4 ml-4">Topics covered:</p>
                            <ul className="mb-5 ml-4">
                                {props.header.topics.map((t) => (
                                    <li className="font-sans">{t}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="group flex hover:-translate-y items-center p-4">
                        <p className="ml-5 font-light font-sans min-w-fit tracking-tighter">
                            Made by <a href="_blank" className="group-hover:font-bold">{props.header.author}</a>
                        </p>
                        <img src={props.header.authorpfp} alt="" className="ml-2 border size-10 rounded-full hover:mask-b-from-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}