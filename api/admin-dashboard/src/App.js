import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInput } from "./formsorce";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext)
console.log(user, 'done')
    if(!user){
      return <Navigate to="/login"></Navigate>
    }
    return children
  }
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login/>}></Route>
            <Route
             index
            element={<ProtectedRoute> <Home/> </ProtectedRoute>}></Route>
          </Route>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}></Route>
            <Route path="new" element={<New inputs={userInput} title="Add New User" />}></Route>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}></Route>
            <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
