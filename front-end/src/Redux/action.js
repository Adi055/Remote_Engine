import { DATA_SUCCESS, Login_Success, Logout_Success, POST_SUCCESS, REMOVE_DATA } from "./ActionType"


export const LoginSuccess=(payload)=>{
    return {type:Login_Success,payload}
}
  

export const LogoutSuccess=()=>{
    return {type:Logout_Success}
  }


export const DataSuccess=(payload)=>{

return {type:DATA_SUCCESS,payload}
}


export const RemoveData=(payload)=>{
return {type:REMOVE_DATA,payload}
}

export const PostSuccess=()=>{
    return {type:POST_SUCCESS}
}