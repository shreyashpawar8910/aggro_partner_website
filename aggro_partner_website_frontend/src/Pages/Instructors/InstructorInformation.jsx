import { Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddRearch from './Assets/reasearch-1.png'
import { useNavigate } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from 'react-toastify';
import { deleteInstructorInfo, getInstructorResearchById } from '../../Services/InstructorService';

const InstructorInformation = () => {

    const [instructorData, setInstructorData] = useState([]);

    const navigate = useNavigate();

    const handleReasearchBtn = () => {
        navigate('/instructor/reasearch/form')
    }

    const userData = JSON.parse(localStorage.getItem("data"));
    var setInstructorId = userData.id;

    useEffect(() => {
        getInstructorResearchById(setInstructorId).then((response) => {
            setInstructorData(response.data);
        })
    })

    
    const handleUpdate=(id)=>{
        
        navigate("/instructorInfo/updateInfo/"+id);
    }

    const handleDelete=(id)=>{
        deleteInstructorInfo(id).then((response)=>{
            navigate("/instructor/reasearch")
            toast.success("Research Blog Delete Successfull....");
        }).catch((error)=>{
            toast.error("Research Blog Delete Faild..!!!");
        })
    }

    return (
        <section >
            <div className='m-[6rem]'>
                <section className='relative items-center justify-center flex mt-20 bg-gray-100 '>
                    <form className='m-8 size-[8rem] cursor-pointer '>
                        <img className='' src={AddRearch} onClick={handleReasearchBtn} />
                        {/* <Button sx={{ py: 1.5, ml: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type='submit'>Publish Reasearch </Button> */}
                    </form>
                </section>


                <div className='bg-gray-100 mt-10'>
                    <div className='mt-[5rem]'>

                        {instructorData.map((item, num) =>


                            <Card className='p-5 lg:flex item-center justify-between box productCard mt-6 cursor-pointer h-[18rem]'>
                                <div className='lg:flex textPart item-center lg:space-x-5 '>
                                    <img className='w-[10rem] h-[10rem] object-cover mt-10'
                                        src={`data:image/jpeg;base64,${item.imageData}`}
                                        alt='' />



                                    <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                                        <p className='font-bold text-2xl'> {item.infoTitle} </p>
                                        <p className='font-semibold text-xl opacity-30'> {item.infoSubTitle} </p>
                                        <p className='line-clamp-5'>{item.infoContent}</p>
                                        <p className='font-semibold'>Related Crps : {item.infoRelatedCrops}</p>

                                    </div>
                                </div>

                                <div className='flex flex-row space-x-5 size-[5rem]'>
                                    
                                  
                                        <p className='text-green-600' onClick={() =>handleUpdate(item.id)} ><EditIcon /></p>
                                                                    
                                        <p className='text-red-600' onClick={() => handleDelete(item.id)} ><DeleteIcon /></p>
                                  

                                </div>

                            </Card>
                        )}
                    </div>

                </div>




            </div>
        </section>
    )
}

export default InstructorInformation
