import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePages from './components/pages/home'
import PostPages from './components/pages/posts'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/posts' element={<PostPages />} />
      </Routes>
    </>
  )
}

export default App
