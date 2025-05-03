import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import AdminPanel from './components/adminpanel/AdminPanel';
import AddProduct from './components/adminpanel/products/add_products/AddProduct';
import AddCategory from './components/adminpanel/categories/AddCategory';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/adminPanel" element={<AdminPanel/>} />
            <Route path="/addProduct" element={<AddProduct/>} />
            <Route path="/addCategory" element={<AddCategory/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;