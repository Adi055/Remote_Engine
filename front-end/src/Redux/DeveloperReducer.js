import { DATA_ERROR, DATA_REQUEST, DATA_SUCCESS, POST_SUCCESS, REMOVE_DATA } from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    data:[]
};


const DeveloperReducer=(state=initialState,{type,payload})=>{

    switch(type){

        case DATA_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isError: false,
              };
        }
        case DATA_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
        }

       case DATA_ERROR:{
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
        }
        case REMOVE_DATA:{
            return {
                ...state,
                data:state.data.filter((ele)=>ele.id!=payload)
            }
        }
        case POST_SUCCESS:{
            return {...state}
        }

        default:{
            return state
        }
    }

}


export default DeveloperReducer