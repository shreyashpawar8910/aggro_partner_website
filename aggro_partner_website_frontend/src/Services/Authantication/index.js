
export const isLoggedIn = ()=>{
    let data = localStorage.getItem("data");

    if(data==null){
        return false;
    }else{
        return true;
    }
}

export const doLogin=(data, next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
}

export const doLogout = ()=>{
    localStorage.removeItem("data");
}

export const getCurrentUserDetail = ()=>{
    if(isLoggedIn()){
        console.log(JSON.parse(localStorage.getItem("data")));


        return JSON.parse(localStorage.getItem("data"));
        
    }else{
        return undefined;
    }
}