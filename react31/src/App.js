import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './CRUD/Home'
import Update from './CRUD/Update'
import CreateProuduct from './CRUD/CreateProuduct'
import Admin from './CRUD/Admin'
import Products from './CRUD/Products'
const App = () => {
 return <>
 <Router>
         <Navbar/>
         <Routes>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/products" element={<Products/>}/>  
            <Route path="/admin" element={<Admin/>}/>  
            <Route path="/create" element={<CreateProuduct/>}/>  
            <Route path='/update/:id' element={<Update/>}/>  
         </Routes>
 </Router>
 </>
}

export default App