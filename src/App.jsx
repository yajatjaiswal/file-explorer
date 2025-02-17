import { useState } from 'react'
import './App.css'
import SideBar from './components/Sidebar'
import FileExplorer from './components/FileExplorer'

function App() {

  return (
    <div className='app'>
      <h1>File Explorer</h1>
      {/* <SideBar /> */}
      <FileExplorer />
      {/* <div className='content'> Select A file to view </div> */}
    </div>
  )
}

export default App
