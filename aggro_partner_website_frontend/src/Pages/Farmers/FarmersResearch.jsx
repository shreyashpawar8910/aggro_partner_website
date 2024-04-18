import { Button, Card, Dialog, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FarmersResearchData } from './FarmersResearchData'
import { getAllResearchBlogs, getSearchResearchBlogs } from '../../Services/InstructorService';

const FarmersResearch = () => {

    const [open, openChange] = useState('line-clamp-5');
    const [researchData, setResearchData] = useState([]);
    const [textFieldValue, setTextFieldValue] = useState('');

    const functionOpenPopup = () => {
        openChange('');

    }

    const functionClosePopup = () => {
        openChange('line-clamp-5');
    }

    useEffect(() => {

        if (textFieldValue === '') {
            getAllResearchBlogs().then((response) => {
                setResearchData(response.data);
            })
        }else{
            getSearchResearchBlogs(textFieldValue).then((response)=>{
                setResearchData(response.data);
            })
        }


    })

    const handleSearchSubmit = (event) => {
        const typedText = event.target.value;

        setTextFieldValue(typedText);
    }



    return (
        <section className='relative  items-center justify-center m-10'>



            <section className='relative items-center justify-center flex mt-20 ml-[15rem] mr-[15rem] bg-gray-100 mb-10'>
                <form className='m-8 bg-white'>
                    <TextField
                        
                        value={textFieldValue}
                        onChange={handleSearchSubmit}
                        label='Search..'
                        sx={{ width: '400px' }}
                    />

                </form>
            </section>



            {researchData.map((item, num) =>
                <section className='  relative ml-[15rem] mr-[15rem] items-center mt-20 bg-gray-100 productCard cursor-pointer'
                    onClick={functionOpenPopup}>

                    <div className='relative flex flex-col items-center justify-center '>
                        <p className='font-bold text-4xl mt-10'>{item.infoTitle}</p>
                    </div>
                    <div className='mt-[4rem] textPart'>
                        <p className='font-semibold m-4'>Sub Title : {item.infoSubTitle}</p>
                        <p className='font-semibold m-4'>Related Crops : {item.infoRelatedCrops}</p>
                    </div>

                    <div className='relative flex h-[25rem]  mt-10 '>
                        <img className='w-full' src={`data:image/jpeg;base64,${item.imageData}`} />
                    </div>

                    <div className='relative flex flex-col items-center justify-center mt-10 textPart'>
                        <div className='m-5'>
                            <p className={open} onClose={functionClosePopup}>{item.infoContent}</p>
                        </div>

                    </div>
                    <div className='relative flex flex-col items-end justify-end m-5 textPart'>
                        <p className='font-semibold'>-{item.infoInstructorName}</p>
                        <p className='font-semibold'>-{item.infoInstructorPhone}</p>
                    </div>
                </section>
            )}






        </section>
    )
}

export default FarmersResearch
