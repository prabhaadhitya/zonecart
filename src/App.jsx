import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/home' element={<Navigate to="/"/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
