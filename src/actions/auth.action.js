import { authConstants } from "./constants";
import store from "../store";
import axios from "../helpers/axios";

export const login = async (user) => {
  try {
    const res = await axios.post(`/user/admin/login`, {
      ...user,
    })
 console.log()
    if (res.status === 201) {
      const { access_token, user } = res.data;
      localStorage.setItem("token", access_token);
      localStorage.setItem("user",JSON.stringify(user));
      store.dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          access_token,
          user,
        },
      });
    }
    store.dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });

  } catch (err) {
    console.log(err)
    store.dispatch({
      type: authConstants.LOGIN_FAILED,
      payload: {
        error: err,
      },
    });
  }
};


export const isUserLoggedIn = () =>{
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if(token){
    store.dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,user
      }
    })
  }else{
    store.dispatch({
      type: authConstants.LOGIN_FAILED,
      payload: {
        error:"Failed to login"
      }
    })
  }

}
