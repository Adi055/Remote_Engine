import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const PrivateRoute=({children})=>{
    
    let isAuth=useSelector((ele)=>ele.AuthReducer.isAuth)
    let token=JSON.parse(localStorage.getItem("token"))
        console.log(isAuth);
       
       if(!token){
        return <Navigate to="/login"/>
       }

    return (
        children
    )
}

export default PrivateRoute