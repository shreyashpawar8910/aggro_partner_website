import { myAxios } from "./helper";

const API_URL="http://localhost:8080";




export const uploadFarmerProduct=(product)=>{
   // return myAxios.post("/saveFarmerProduct", product,).then((response)=> response.data);

    return myAxios.post(API_URL+'/saveFarmerProduct', product, {
        headers: {
          'Content-Type': 'multipart/form-data'
           
        }
      })
      .then(response => {
        return response.data; 
      })
      .catch(error => {   
        throw error;
      });

};


// ************ This Function for gating all farmers Products ************

export const getAllFarmerProducts = (farmerId)=>{
  return myAxios.get('/getAllFarmerProduct/'+farmerId);
}


export const deleteFarmerProduct = (mainId)=>{
  return myAxios.delete("/deleteFarmerProduct/"+mainId);
}


//***************************************************************** */
// ************ This Function for Creating Farmer Profile ************

export const createFarmerProfile = (profile) =>{
  return myAxios.post("/saveFarmerProfile", profile).then((response)=>response.data)
}


// ************ This Function for Update Farmer Profile ************

export const updateFarmerProfile=(profile, mainId)=>{
  return myAxios.post("/updateFarmerProfile/"+mainId, profile).then((response)=> response.data)
}


// ************ This Function for Update Farmer Profile ************

export const getFarmerProfileByFarmerId=(mainId)=>{
  return myAxios.get("/getFarmerProfileById/"+mainId);
}




// ************ This Function for get all Instructors Profile ************

export const getAllInstructorProfile = ()=>{
  return myAxios.get("/getAllInstructors");
}

// ************ This Function for Search Instructors Profile ************

export const getSearchInstructorProfile = (data) =>{
  return myAxios.get("/getSearchInstructorProfile/"+data);
}


// ************ This Function for Book Farmer Session With Instructor ************

export const bookFarmerSessionWithInstructor = (sessionData)=>{
  return myAxios.post("/bookFarmerSessionWithInstructor", sessionData);
}


//*************************************************************************** */

//*************************This function for getting new order's for Farmer**** */

export const getFarmerNewOrdersByFarmerId=(mainId)=>{
  return myAxios.get("/getFarmerNewOrdersByFarmerId/"+mainId);
}

export const getFarmerDeliverdOrdersByFarmerId=(mainId)=>{
  return myAxios.get("/getFarmerDeliverdOrdersByFarmerId/"+mainId);
}
