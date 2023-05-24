import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Flow from './view/Flow'
import WriteMsg from './view/WriteMsg'

function App() {
  const router = createBrowserRouter ([
    {
      path:'/',
      element: <Flow/>
    },
    {
      path:'/writemsg',
      element: <WriteMsg/>
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
