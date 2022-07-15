import './App.css';
import Nav from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<h1>Product Listing component</h1>}></Route>
          <Route path='/addproduct' element={<h1>Add Product component</h1>}></Route>
          <Route path='/updateproduct' element={<h1>Update Product component</h1>}></Route>
          <Route path='/logout' element={<h1>Logout component</h1>}></Route>

          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
