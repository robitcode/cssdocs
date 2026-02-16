import { useState } from 'react'
import './App.css'

import DetailComponent from './components/DetailComponent';
import HeaderComponent from './components/HeaderComponent';
import AlignItems from './guide/box-positioning/AlignItems';
import AlignContent from './guide/box-positioning/AlignContent';
import JustifyContent from './guide/box-positioning/JustifyContent';
import JustifyItems from './guide/box-positioning/JustifyItems';
import JustifySelf from './guide/box-positioning/JustifySelf';
import FlexGrow from './guide/box-positioning/FlexGrow';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState()
  const components = [
    { "id": "align-items", "name": "Align-Items", "components": <AlignItems /> },
    { "id": "align-content", "name": "Align-Content", "components": <AlignContent /> },
    { "id": "justify-content", "name": "Justify-Content", "components": <JustifyContent /> },
    { "id": "justify-item", "name": "Justify-Item", "components": <JustifyItems /> },
    { "id": "justify-self", "name": "Justify-Self", "components": < JustifySelf /> },
    { "id": "flex-grow", "name": "Flex-Grow", "components": < FlexGrow /> },
  ]

  const Preview = components.find(c => c.id === selected)?.components;
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log("dark mode:",darkMode);
    
  }
  return (
    <div className={`${darkMode ? "dark" : ""} flex h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans `}>

      {/* Sidebar */}
      <aside className={`h-screen transition-all duration-300 ease-in-out w-40 md:w-80`}>
        <nav className='h-full flex flex-col bg-white dark:bg-gray-900 border-r shadow-sm'>

          {/* Logo / Toggle Area */}
          <div className='p-4 pb-2 flex justify-between items-center'>

            <div className={`font-bold text-xl text-indigo-600 overflow-hidden transition-all`}>
              CSS Docs
            </div>

            <button
              onClick={() => toggleTheme()}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              {/* Toggle Icon */}
              {darkMode ? (
                /* Sun Icon (Show this when Dark Mode is ON) */
                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon (Show this when Dark Mode is OFF) */
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-gray-800 dark:hover:bg-gray-800 dark:text-gray-400' 
                    }`}>
                  {component.name}
                </button>
              ))
            }
          </div>
        </nav>
      </aside>

      {/* Preview Pane */}
      <main className='flex-1 flex flex-col overflow-hidden dark:bg-gray-950 transition-colors duration-300'>
        <header className="h-16 bg-white border-b border-zinc-200  flex items-center px-8 justify-between dark:bg-gray-900 dark:border-gray-800">
          <span className='text-sm font-bold text-zinc-500 dark:text-gray-400'>
            Previewing: <span className="text-zinc-900 dark:text-white">{selected}</span>
          </span>
          <div className='flex gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-400' />
            <div className='w-3 h-3 rounded-full bg-yellow-400' />
            <div className='w-3 h-3 rounded-full bg-green-400' />
          </div>
        </header>

        <section className='flex-1 overflow-auto p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px]'>

          <div className='max-w-5xl mx-auto'>
            {/* The Render zone */}
            {Preview || <div className='text-zinc-400 dark:text-gray-600'>Select a component</div>}
          </div>
        </section>

      </main>
    </div>
  )
}

export default App