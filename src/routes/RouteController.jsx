import { Routes, Route } from "react-router-dom"
import Register from "./register/Register"
import Login from "./login/Login"
import Home from "./homepage/Home"

const RouteController = () => {
  return (
    <Routes>
        <Route path="home" element= {<Home/>} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/login" element= {<Login/>} />
    </Routes>
  )
}
  
export default RouteController