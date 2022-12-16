import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
import { useState ,createContext } from "react";
import Addpodact from "./pages/Addprodact"
import Showprodacts from "./pages/Showprodacts";
import Addiamge from "./pages/Addiamge";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Login from "./pages/login/Login";
import Blogs from "./components/Blogs";
import Error from "./pages/Error";
import Sginup from "./pages/sginup/Sginup";
import AddBlog from "./pages/AddBlog";

 export const  Logincontext = createContext()

function App() {


    var check = window.localStorage.getItem('isLogedin')
 
  return (
    <>
       
        <BrowserRouter>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Sginup />} />
            <Route path="/blogs" element={ check ?   <Blogs /> : <Sginup /> } />
            <Route path="/addblog" element={ check ?   <AddBlog /> : <Sginup /> } />

            </Routes>
        </BrowserRouter>
  
    </>
  );
}

export default App;
