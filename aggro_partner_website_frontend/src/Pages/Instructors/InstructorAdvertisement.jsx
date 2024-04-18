import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { Modal, ModalHeader } from 'reactstrap';

import Advertisement from './Assets/Advertise.png'
import DeleteIcon from '@mui/icons-material/Delete';

import { InstroctorAdvertisement } from './InstroctorAdvertisementData';
import { deleteAdvertisement, getAdvertisementByInstructorId, saveInstructorAdvertisement } from '../../Services/InstructorService';
import { toast } from 'react-toastify';
import{ useNavigate } from 'react-router-dom';

const InstructorAdvertisement = () => {

    const [open, openchange] = useState(false);
    const [advertiseData, setAdvertiseData] = useState([]);
    const navigate = useNavigate();

    const functionOpenPopup = () => {
        openchange(true);
    }

    const functionClosePopup = () => {
        openchange(false);
    }

    const userData = JSON.parse(localStorage.getItem("data"));
    var setInstructorId = userData.id;

    const handleUploadImage = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const advertise={
            image: data.get("advImage"),
            instructorId: setInstructorId
        }
        saveInstructorAdvertisement(advertise).then((response) =>{
            navigate("/instructor/advertisement")
            toast.success("Advertisement Save Successfull....");
        }).catch((error)=>{
            toast.error("Advertisement Save Faild..!!!");
        })

    }

    useEffect(()=>{
        getAdvertisementByInstructorId(setInstructorId).then((response)=>{
            setAdvertiseData(response.data);
        })
    })


    const handleDelete=(mainId)=>{
        deleteAdvertisement(mainId).then((response)=>{
            navigate("/instructor/advertisement")
            toast.success("Advertisement Delete Successfull.....");
        }).catch((error)=>{
            toast.error("Advertisement Delete Faild..!!!");
        })
    }

    return (
        <div className='relative flex flex-col justify-center items-center'>

            <Dialog open={open} onClose={functionClosePopup} fullWidth maxWidth='md' >
                <form onSubmit={handleUploadImage}>
                    <DialogTitle>Upload Image </DialogTitle>
                    <DialogContent>
                        <TextField
                            type='file'
                            name='advImage'
                            id='advImage'
                            fullWidth />
                    </DialogContent>

                    <Button sx={{ py: 1.5, m: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type='submit'>Submit </Button>
                </form>

            </Dialog>


            <section className='relative items-center justify-center flex mt-20  w-full ' onClick={functionOpenPopup}>
                <form className='m-8 size-[19rem] cursor-pointer '>
                    <img className='' src={Advertisement} />
                    {/* <Button sx={{ py: 1.5, ml: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type='submit'>Publish Reasearch </Button> */}
                </form>
            </section>

            <div className='bg-gray-200 w-[60vw] flex items-center justify-center mt-10 h-full mb-10' >

                <Grid container spacing={3}>


                    {advertiseData.map((item, num) =>
                        <Grid item xs={12} >
                            <div className='productCard p-5 cursor-pointer '>

                                <div className='h-full'>
                                    <img className='h-full w-full object-cover object-left-top' src={`data:image/jpeg;base64,${item.imageData}`} alt='' />
                                </div>
                                <div className='textPart bg-white p-3 '>
                                    <div className='flex flex-row space-x-6 items-center relative justify-center'>
                                        <p className='text-5xl text-red-600' onClick={() => handleDelete(item.id)}><DeleteIcon /></p>
                                    </div>
                                </div>
                            </div>


                        </Grid>
                    )}

                </Grid>


            </div>
        </div>
    )
}

export default InstructorAdvertisement
