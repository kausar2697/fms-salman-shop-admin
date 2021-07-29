import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component:Component,...rest}) => {
    console.log("rest========",rest)
    return <Route {...rest} component={(props)=>{
        const token = window.localStorage.getItem('token')
        if(token){
            return <Component {...props}/>
        }else{
            return <Redirect to={'/signin'}/>
        }
    }} />
}
 
export default PrivateRoute;