import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
const Single = lazy (() => import ('./single/Single'))
const Login = lazy (() => import ('./login/Login'))
const Home = lazy (() => import ('./homepage/Home'))


const RouteController = () => {
  return (
    <Routes>
        <Route path="home" element= {<Suspense fallback= { <p>Loading...</p> }><Home/></Suspense>} />
        <Route path="/single/:id" element= {<Suspense fallback= { <p>Loading...</p> }><Single/></Suspense>} />
        <Route path="/login" element= {<Suspense fallback= { <p>Loading...</p> }><Login/></Suspense>} />
    </Routes>
  )
}
  
export default RouteController