import {Routes,Route} from "react-router-dom"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Client from "../Pages/Client"
import Developer from "../Pages/Developer"
import PrivateRoute from "./PrivateRoute"

const AllRoutes=()=>{

return (
        <Routes>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/client" element={<PrivateRoute><Client/></PrivateRoute>}/>
            <Route path="/form" element={<PrivateRoute><Developer/></PrivateRoute>}/>
           
        </Routes>

   
)

}

export default AllRoutes