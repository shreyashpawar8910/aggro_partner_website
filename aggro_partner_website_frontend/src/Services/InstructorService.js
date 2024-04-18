import { myAxios } from "./helper";

export const saveInstructorProfile=(instructor)=>{
    return myAxios.post("/saveInstructorProfile", instructor).then((response)=> response.data);
}

export const updateInstructorProfile = (instructor, mainId)=>{
    
    return myAxios.post("/updateInstructorProfile/"+mainId, instructor).then((response)=> response.data);
}

export const getInstructorSessionsByInstructorId = (mainId)=>{
    return myAxios.get("/getInstructorBookedSession/"+mainId);
}

export const updateSessionDoneYes = (mainId) =>{
    
    return myAxios.get("/updateSessionDoneYes/"+mainId);
}


// ****************************************************************************
//**************** Instructor Research *************************** */

// ****************** For Save Instructor Research Blogs *********************

export const saveInstructorResearch=(product)=>{
 
     return myAxios.post('/saveInstructorInformation', product, {
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


 // ****************** For get Instructor Research Blogs By Instructor Id *********************

 export const getInstructorResearchById=(mainId)=>{
    return myAxios.get("/instructorResearchBlogsByInstructorId/"+mainId); 
 }


 // ****************** For get Instructor Research Blogs By Research Data Id *********************

 export const getResearchByResearchId= (mainId)=>{
    return myAxios.get("getResearchBlogById/"+mainId);
 }


 // ****************** For Update Instructor Research Blogs *********************

 export const updateInstructorInformation=(researchBlog, mainId)=>{
    return myAxios.post("/updateInstructorInformation/"+mainId, researchBlog);
 }

// ****************** For Delete Instructor Research Blogs *********************

 export const deleteInstructorInfo=(mainId)=>{
    return myAxios.delete("/deleteInstructorInfo/"+mainId);
 }


 // ****************** For get all Instructor Research Blogs *********************

 export const getAllResearchBlogs=()=>{
    return myAxios.get("/getAllResearchBlogs");
 }

 export const getSearchResearchBlogs=(data)=>{
   return myAxios.get("/getSearchResearchBlogs/"+data);
 }





 // *****************************************************************************
 // ****************** For get all Farmers Profiles *********************

 export const getAllFarmerProfiles=()=>{
    return myAxios.get("/getAllFarmerProfiles");
 }


 // ****************** For get Search Farmers Profiles *********************
 export const getSearchFarmerProfile=(data)=>{
   return myAxios.get("/getSearchFarmerProfile/"+data);
 }


 // *****************************************************************************
 
 // ****************** For Save Instructor Advertisemant  *********************

 export const saveInstructorAdvertisement=(advertise)=>{
  return myAxios.post("/saveInstructorAdvertisement", advertise, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }   
    });
 }

 // ****************** For get Instructor Advertisemant By Instructor I  *********************
 
 export const getAdvertisementByInstructorId=(mainId)=>{
    return myAxios.get("/getAdvertisementByInstructorId/"+mainId);
 }

 
 // ****************** For get All Instructor Advertisemant  I  *********************
 
 export const getAllAdvertisement=()=>{
   return myAxios.get("/getAllAdvertisement");
}

 


  // ****************** For get Instructor Advertisemant By Instructor I  *********************
 
  export const deleteAdvertisement=(mainId)=>{
    return myAxios.delete("/deleteAdvertisement/"+mainId);
 }