import { Box, Button, Grid, MenuItem, Select, TextField } from '@mui/material'


import { userEmailValidation, userRegister } from '../../Services/userService'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const UserRegisterPage = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const register = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            city: data.get("city"),
            dist: data.get("dist"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            phoneNumber: data.get("phoneNumber"),
            role: data.get("role"),
            username: data.get("username"),
            password: data.get("password")

        }


        userRegister(register).then((response) => {
            console.log(response);
            console.log("Success Log");
            navigate("/login")
            toast.success("User Register Successfully..")
            
            navigate("/login")
            window.location.reload();

        }).catch((error) => {
            console.log(error);
            console.log("Error Log");
            toast.error("User Name Already Exist..")
        });


    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-3'>

            <div className='hidden sm:block'>

                <img className='w-full h-full object-cover object-right' src='https://okcredit-blog-images-prod.storage.googleapis.com/2020/10/shutterstock_1484680373.jpg' />

            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>

                <form className='ml-5 mr-5' onSubmit={handleSubmit}>
                    <h2 className='text-4xl font-bold text-center py-6'>Aggro Partner</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="lasttName"
                                name="lastName"
                                label="Last Name"
                                fullWidth

                            />

                        </Grid>


                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="dist"
                                name="dist"
                                label="District"
                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="state"
                                name="state"
                                label="State / Province / Region"
                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="zip"
                                name="zip"
                                label="Zip / Postal Code"
                                fullWidth
                                autoComplete='shipping postal-code'
                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number" fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>



                            <Select required
                                id="role"
                                name="role"
                                label="Role"
                                fullWidth

                            >
                                <MenuItem value={"farmer"}>Farmer</MenuItem>
                                <MenuItem value={"customer"}>Customer</MenuItem>
                                <MenuItem value={"instructor"}>Instructor</MenuItem>

                            </Select>

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="username"
                                name="username"
                                label="User Name"

                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <TextField required
                                id="password"
                                name="password"
                                label="password"
                                type='password'
                                fullWidth

                            />

                        </Grid>

                        <Grid item xs={12} >

                            <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                type='submit'>Register</Button>

                        </Grid>



                    </Grid>
                </form>


            </div>

        </div>
    )
}

export default UserRegisterPage
