import {RouterProvider, createBrowserRouter } from "react-router-dom"
import All from "./pages/All"
import "./App.css"
import Fsd from "./pages/Fsd"
import Datascience from "./pages/Datascience"
import Cybersecurity from "./pages/Cybersecurity"
import Career from "./pages/Career"

const router = createBrowserRouter([
  {
    path: "/",
    element: <All />
  },
  {
    path: "/fsd",
    element: <Fsd />
  },
  {
    path: "/ds",
    element: <Datascience />
  },
  {
    path: "/cs",
    element: <Cybersecurity />
  },
  {
    path: "/c",
    element: <Career />
  },
])

const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App