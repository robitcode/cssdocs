import { useState } from 'react'
import './App.css'
import DetailComponent from './components/DetailComponent';
import AlignItems from './guide/box-positioning/AlignItems';
import JustifyContent from './guide/Justify/JustifyContent';


  function App() {
    const [expanded, setExpanded] = useState(true);
    const [selected, setSelected] = useState()
    const components = [
      { "id": "align", "name": "Align-Items", "components": <AlignItems /> },
      { "id": "justify", "name": "Justify-Content", "components": <JustifyContent/>}
    ]

    const Preview = components.find(c => c.id === selected)?.components;

    return (
      <div className='flex h-screen bg-gray-50 text-gray-900 font-sans'>

        {/* Sidebar */}
        <aside className={`h-screen transition-all duration-300 ease-in-out ${expanded ? 'w-60' : 'w-fit'}`}>
          <nav className='h-full flex flex-col bg-white border-r shadow-sm'>

            {/* Logo / Toggle Area */}
            <div className='p-4 pb-2 flex justify-between items-center'>

              <div className={`font-bold text-xl text-indigo-600 overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'} `}>
                CSS Docs
              </div>

              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-100"
              >
                {/* Toggle Icon */}
                {expanded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

            <div className='flex-1 overflow-y-auto p-4 space-y-8'>
              {
                components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setSelected(component.id)}
                    className={`w-full text-center p-4 rounded-xl text-sm font-medium transition-all
                        ${selected == component.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                      }`}>
                    {component.name}
                  </button>
                ))
              }
            </div>
          </nav>
        </aside>

        {/* Preview Pane */}
        <main className='flex-1 flex flex-col overflow-hidden'>
          <header className="h-16 bg-white border-b border-zinc-200 flex items-center px-8 justify-between">
            <span className='text-sm font-bold text-zinc-500'>
              Previewing: <span className="text-zinc-900">{selected}</span>
            </span>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-400' />
              <div className='w-3 h-3 rounded-full bg-yellow-400' />
              <div className='w-3 h-3 rounded-full bg-green-400' />
            </div>
          </header>
              
          <section className='flex-1 overflow-auto p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

              <div className='max-w-5xl mx-auto'>
                {/* The Render zone */}
                {Preview || <div className='text-zinc-400'>Select a component</div> }
              </div>
          </section>

        </main>
      </div>
    )
  }

  export default App