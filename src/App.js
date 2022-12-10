import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
import { useState ,createContext } from "react";
import Addpodact from "./pages/Addprodact"

export const  Appcontext = createContext()

function App() {

  const [ username , setUsername ] = useState("zakaria")

  return (
    <>
      <Appcontext.Provider value={{username , setUsername}}>
      {/* <Navbar /> */}
      <Addpodact />
       </Appcontext.Provider>
    </>
  );
}

export default App;
