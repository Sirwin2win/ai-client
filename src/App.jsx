import React from 'react'
import { Provider } from 'react-redux'
import store from './features/store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App