import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Portfelio from './Pages/Portfelio'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Knowledges from './Pages/Knowledges'
import NotFound from './Pages/NotFound'


const App =() => {
  return(
    <div>
      <BrowserRouter>
      
       <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Portfelio" element={<Portfelio/>} exact />
          <Route path="/knowledge" element={<Knowledges/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
          <Route path ="*" element={<NotFound/>}  /> 
          
        </Routes>
      </BrowserRouter> 
      
    </div>
  )
}
export default App