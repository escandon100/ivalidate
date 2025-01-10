import{ React}from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";


const App = () => {
  
  const router = createBrowserRouter([{
    path : "/",
    element : <Layout />, 
  }
])

  return(
    <div>
     <RouterProvider router = {router}/>
   
    </div>
  )
}
  export default App;
 
 