import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Service, NotFound } from "./components"
import Layout from './layout/Layout';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;