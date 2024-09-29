import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"


const Layout = () =>{  // a outlet functio which a parent can paas to its childrens. 
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
        {
            path : "/Home",
            element : <Home/>
        },
        {
            path : "/",
            element : <Home/>
        },
        {
        path : "/post/:id",
            element : <Single/>
        },
         {
            path : "/Write",
            element : <Write/>
        },
    ]
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },

]);


  // creating div  for cosmetic and containers and className should be camel case

export function App() {
  return (
    <div className="app">       
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export function Temp2() {
  return (
    <div>
      A div print from temp 2
    </div>
  );
}



export default App;
