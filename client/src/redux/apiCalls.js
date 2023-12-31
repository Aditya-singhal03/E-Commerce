import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch(err){
        dispatch(loginFailure());
    }
};
export const register = async (dispatch,user)=>{
    dispatch(loginStart());
    console.log(user);
    try{
        const res= await publicRequest.post("/auth/register",user);
        dispatch(loginSuccess(res.data));
    } catch(err){
        dispatch(loginFailure());
    }
};