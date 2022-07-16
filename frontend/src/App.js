import './App.css';
import Nav from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Product Listing component</h1>}></Route>
            <Route path='/addproduct' element={<h1>Add Product component</h1>}></Route>
            <Route path='/updateproduct' element={<h1>Update Product component</h1>}></Route>
            <Route path='/logout' element={<h1>Logout component</h1>}></Route>
          </Route>

          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
