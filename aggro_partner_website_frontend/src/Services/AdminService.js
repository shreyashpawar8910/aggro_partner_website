import { myAxios } from "./helper";


// ********** For get Placed orders for Admin **********

export const getAdminPlacedOrders=()=>{
    return myAxios.get("/getAdminPlacedOrders");
}



// ********** For get Shipped orders for Admin **********

export const getAdminShippedOrders=()=>{
    return myAxios.get("/getAdminShippedOrders");
}


// ********** For get Out For Delivery orders for Admin **********

export const getAdminOutForDeliveryOrders=()=>{
    return myAxios.get("/getAdminOutForDeliveryOrders");
}



// ********** For get Delivered orders for Admin **********

export const getAdminDeliverdOrders=()=>{
    return myAxios.get("/getAdminDeliverdOrders");
}


// ********** For get Change orders Status for Admin **********

export const changeOrderStatusForAdmin=(mainId, orderStatus)=>{
    return myAxios.post("/changeOrderStatusForAdmin/"+mainId ,orderStatus);
}


// ********** For get Change orders Status for Admin **********

export const changeOrderStatusOfDeliveryForAdmin=(mainId,  deliveredOrderDate)=>{
    return myAxios.post("/changeOrderStatusOfDeliveryForAdmin/"+mainId, deliveredOrderDate);
}

