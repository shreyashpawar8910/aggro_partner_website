import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveInstructorResearch } from '../../Services/InstructorService';
import { toast } from 'react-toastify';

const InstroctorReasearchForm = () => {

    const navigate = useNavigate();

    const handleProductSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = JSON.parse(localStorage.getItem("data"));
        var setInstructorId = userData.id;

        const formDataToSend = new FormData();

        formDataToSend.append('infoTitle', data.get("title"));
        formDataToSend.append('infoSubTitle', data.get("subTitle"));
        formDataToSend.append('infoContent', data.get("researchContent"));
        formDataToSend.append('infoRelatedCrops', data.get("relatedCrops"));
        formDataToSend.append('infoInstructorName', data.get("instructorName"));
        formDataToSend.append('infoInstructorPhone', data.get("instructorContact"));
        formDataToSend.append('image', data.get("image"));

        formDataToSend.append("instructorId", setInstructorId);

        console.log("Data is ", formDataToSend);
        
        saveInstructorResearch(formDataToSend).then((response)=>{
            navigate("/instructor/reasearch");
            toast.success("Research Blog Added Succesfull....")
        }).catch((error) => {
            toast.error("Research Blog Added Faild....")
        });

    }


    return (
        <div>
            <div className=' flex flex-col relative items-center justify-center'>

                <div className='w-[80rem] bg-gray-100 mt-[5rem]'>
                    <form className='ml-5 mr-5' onSubmit={handleProductSubmit} >
                        <h2 className='text-4xl font-bold text-center py-6 mb-5'>Reasearch Blog</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="title"
                                    name="title"
                                    label="Title"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="subTitle"
                                    name="subTitle"
                                    label="Sub Title"
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} >

                                <TextField required
                                    id="researchContent"
                                    name="researchContent"
                                    label="Reasearch Content"
                                    fullWidth
                                    multiline
                                    rows={7}

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="relatedCrops"
                                    name="relatedCrops"
                                    label="Related for Crops"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="image"
                                    name="image"
                                    label="Image"
                                    fullWidth
                                    type='file'

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="instructorName"
                                    name="instructorName"
                                    label="Instructor Name"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="instructorContact"
                                    name="instructorContact"
                                    label="Instructor Contact"
                                    fullWidth

                                />

                            </Grid>



                            <Grid item xs={12} >

                                <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                    type='submit'>Publish</Button>

                            </Grid>



                        </Grid>
                    </form>
                </div>




            </div>
        </div>
    )
}

export default InstroctorReasearchForm
