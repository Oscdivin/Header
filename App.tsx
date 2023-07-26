import Reactn from "react" 
import { mainRouter } from "./router/mainRouter";
import{RouterProvider } from "react-router-dom"


const App =()=>{
 return(
   <div>
    <RouterProvider  router= {mainRouter}/>
  </div>
 )
}

export default App;