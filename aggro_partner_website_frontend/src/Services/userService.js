import { useState } from "react";
import { myAxios } from "./helper";

var LoginDetails; 
 

export const userRegister=(user)=>{
    return myAxios.post('/saveAggroUser', user).then((response)=> response.data);
};

export const userLogin = (user) =>{
        
    return myAxios.post('/userLogin', user).then((response) =>  response.data);   
}

export const loginUserDetails = (response) =>{
    
}

