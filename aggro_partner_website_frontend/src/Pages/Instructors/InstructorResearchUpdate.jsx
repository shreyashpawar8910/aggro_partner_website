import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResearchByResearchId, updateInstructorInformation } from '../../Services/InstructorService';
import { toast } from 'react-toastify';

const InstructorResearchUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [researchData, setResearchData]= useState({
        
        infoTitle: "",
        infoSubTitle: "",
        infoContent: "",
        infoRelatedCrops: "",
        infoInstructorName: "",
        infoInstructorPhone: "",

    });

    useEffect(()=>{
        getResearchByResearchId(id).then((response)=>{
            setResearchData({...researchData, infoTitle: response.data.infoTitle, infoSubTitle: response.data.infoSubTitle, infoContent: response.data.infoContent,
                infoRelatedCrops: response.data.infoRelatedCrops, infoInstructorName: response.data.infoInstructorName, infoInstructorPhone:response.data.infoInstructorPhone });
        })
    }, [])


    const handleProductSubmit = (e) => {
        e.preventDefault();
  
        const data = new FormData(e.currentTarget);
  
        const userData = JSON.parse(localStorage.getItem("data"));
        var setInstructorId = userData.id;
  

        const researchData={
            infoTitle: data.get("title"),
            infoSubTitle: data.get("subTitle"),
            infoContent: data.get("researchContent"),
            infoRelatedCrops: data.get("relatedCrops"),
            infoInstructorName: data.get("instructorName"),
            infoInstructorPhone: data.get("instructorContact")

        }
  

        updateInstructorInformation(researchData, id).then((response)=>{
            navigate("/instructor/reasearch");
            toast.success("Research Blog Update Successfull.....");
        }).catch((error)=>{
            toast.error("Research Blog Update Faild...!!!");
        })
  
    }  
    

  return (
      <div>
          <div className=' flex flex-col relative items-center justify-center'>

              <div className='w-[80rem] bg-gray-100 mt-[5rem]'>
                  <form className='ml-5 mr-5' onSubmit={handleProductSubmit} >
                      <h2 className='text-4xl font-bold text-center py-6 mb-5'>Update Reasearch Blog</h2>
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>

                          <label className='pl-5'>Title</label>
                              <TextField required
                                  id="title"
                                  name="title"
                                  value={researchData.infoTitle}
                                  onChange={e => setResearchData({ ...researchData, infoTitle: e.target.value })}
                                  fullWidth

                              />

                          </Grid>

                          <Grid item xs={12} sm={6}>

                          <label className='pl-5'>Sub Title</label>
                              <TextField required
                                  id="subTitle"
                                  name="subTitle"
                                  value={researchData.infoSubTitle}
                                  onChange={e => setResearchData({ ...researchData, infoSubTitle: e.target.value })}
                                  fullWidth

                              />

                          </Grid>


                          <Grid item xs={12} >

                          <label className='pl-5'>Content</label>
                              <TextField required
                                  id="researchContent"
                                  name="researchContent"
                                  value={researchData.infoContent}
                                  onChange={e => setResearchData({ ...researchData, infoContent: e.target.value })}
                                  fullWidth
                                  multiline
                                  rows={7}

                              />

                          </Grid>

                          <Grid item xs={12} sm={6}>

                          <label className='pl-5'>Releted Crops</label>
                              <TextField required
                                  id="relatedCrops"
                                  name="relatedCrops"
                                  value={researchData.infoRelatedCrops}
                                  onChange={e => setResearchData({ ...researchData, infoRelatedCrops: e.target.value })}
                                  fullWidth

                              />

                          </Grid>



                          <Grid item xs={12} sm={6}>

                          <label className='pl-5'>Instructor Name</label>
                              <TextField required
                                  id="instructorName"
                                  name="instructorName"
                                  value={researchData.infoInstructorName}
                                  onChange={e => setResearchData({ ...researchData, infoInstructorName: e.target.value })}
                                  fullWidth

                              />

                          </Grid>

                          <Grid item xs={12} sm={6}>

                          <label className='pl-5'>Contact Number</label>
                              <TextField required
                                  id="instructorContact"
                                  name="instructorContact"
                                  value={researchData.infoInstructorPhone}
                                  onChange={e => setResearchData({ ...researchData, infoInstructorPhone: e.target.value })}
                                  fullWidth

                              />

                          </Grid>



                          <Grid item xs={12} >

                              <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                  type='submit'>Update</Button>

                          </Grid>



                      </Grid>
                  </form>
              </div>




          </div>
      </div>
  )
}

export default InstructorResearchUpdate
