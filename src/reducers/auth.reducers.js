import { authConstants } from "../actions/constants"

const initState = {
    token:'',
    user:{
        fullname:'',
        email:'',
    },
    authentiating:false,
    authenticate:false,
    error:''
}

export default (store=initState,action) =>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            store = {
                ...store,
                ...action.payload,
                authentiating:true
            }
            break;

        case authConstants.LOGIN_SUCCESS:
            store = {
                ...store,
                ...action.payload,
                authenticate:true,
                authentiating:false
            }
            break;
        
        case authConstants.LOGIN_FAILED:
            store = {
                ...store,
                ...action.payload
            }
            break;
    }

    return store
}