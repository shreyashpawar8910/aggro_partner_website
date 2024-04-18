import { myAxios } from "./helper";


export const getAllProductsForCustomer=()=>{
    return myAxios.get("/getProductsForCustomer");
}

export const getFarmerProductById=(mainId)=>{
    return myAxios.get("/getFarmerProductById/"+mainId);
}

export const placeOrder=(orderDetail)=>{
    return myAxios.post("/placeOrder",orderDetail);
}

//**************************** */
export const getFarmerIdUsingProductId=(mainId)=>{
    return myAxios.get("/getFarmerIdUsingProductId/"+mainId);
}


export const getPlacedOrdersByCustomerId=(mainId)=>{
    return myAxios.get("/getPlacedOrdersByCustomerId/"+mainId);
}

export const getDeliverdOrdersByCustomerId=(mainId)=>{
    return myAxios.get("/getDeliverdOrdersByCustomerId/"+mainId);
}