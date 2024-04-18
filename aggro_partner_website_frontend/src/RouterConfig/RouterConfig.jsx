import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/Login_Register/LoginPage';
import Navbar from '../Pages/Navbar/Navbar';
import UserRegisterPage from '../Pages/Login_Register/UserRegisterPage';
import FarmerHomePage from '../Pages/HomePage/FarmerHomePage/FarmerHomePage';
import FarmerProductUpload from '../Pages/Farmers/FarmerProductUpload';
import ProductList from '../Pages/Farmers/ProductList';
import ProductDetailsPage from '../Pages/Order/ProductDetailsPage';
import CustomerOrderAddress from '../Pages/Order/CustomerOrderAddress';
import CustomerOrderPayment from '../Pages/Order/CustomerOrderPayment';
import InstructorsFarmerList from '../Pages/Instructors/InstructorsFarmerList';
import InstructorHomePage from '../Pages/HomePage/InstructorHomePage/InstructorHomePage';
import InstructorInformation from '../Pages/Instructors/InstructorInformation';
import InstroctorReasearchForm from '../Pages/Instructors/InstroctorReasearchForm';
import InstructorAdvertisement from '../Pages/Instructors/InstructorAdvertisement';
import InstructorSessionList from '../Pages/Instructors/InstructorSessionList';
import FarmersResearch from '../Pages/Farmers/FarmersResearch';
import FarmerInstructorList from '../Pages/Farmers/FarmerInstructorList';
import FarmerMainOrder from '../Pages/Farmers/FarmerMainOrder';
import FarmerNewOrders from '../Pages/Farmers/FarmerNewOrders';
import FarmerDeliverdOrder from '../Pages/Farmers/FarmerDeliverdOrder';
import { ToastContainer } from 'react-toastify';
import CustomerHomePage from '../Pages/HomePage/CustomerHomePage';
import InstructorProfileCreate from '../Pages/Instructors/InstructorProfileCreate';
import InstructorEditProfile from '../Pages/Instructors/InstructorEditProfile';
import FarmerUpdateProfile from '../Pages/Farmers/FarmerUpdateProfile';
import FarmerCreateProfile from '../Pages/Farmers/FarmerCreateProfile';
import InstructorResearchUpdate from '../Pages/Instructors/InstructorResearchUpdate';
import CustomerOrderDetailsPages from '../Pages/Customer/CustomerOrderDetailsPages';
import AdminHomePage from '../Pages/Admin/AdminHomePage';
import AdminPlacedOrders from '../Pages/Admin/AdminPlacedOrders';
import AdminShippedOrder from '../Pages/Admin/AdminShippedOrder';
import AdminOutForDeliveryOrder from '../Pages/Admin/AdminOutForDeliveryOrder';
import AdminDeliveredOrder from '../Pages/Admin/AdminDeliveredOrder';



const RouterConfig = () => {
  return (
    <div className='relative'>
        
       <div className='sticky top-0 z-50'>
          <Navbar/>
          
       </div>
      
        <ToastContainer />
        <Routes>
            <Route path='/' element={<HomePage/>} />

            <Route path='/farmer' element={<FarmerHomePage />} />
            <Route path='/customer' element={<CustomerHomePage />} />
            <Route path='/instructor' element={<InstructorHomePage />}  />
            <Route path='/admin' element={<AdminHomePage />}  />


            <Route path='/farmer/products' element={<ProductList/>} />
            <Route path='/farmer/products/addproduct' element={<FarmerProductUpload/>}/>
            <Route path='/farmer/orders' element={<FarmerMainOrder/>}/>
            <Route path='/farmer/orders/newOrders' element={<FarmerNewOrders/>}/>
            <Route path='/farmer/orders/dileverdOrder' element={<FarmerDeliverdOrder/>}/>
            <Route path='/farmer/research' element={<FarmersResearch/>}/>
            <Route path='/farmer/instructor' element={<FarmerInstructorList/>}/>
            <Route path='/farmer/editProfile' element={<FarmerUpdateProfile/>}/>
            <Route path='/farmer/createProfile' element={<FarmerCreateProfile/>}/>
            
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/productDetail/:id' element={<ProductDetailsPage/>} />
            <Route path='/customer/customerOrderDetails' element={<CustomerOrderDetailsPages/>} />


            <Route path='/productDetail/orderAddress' element={<CustomerOrderAddress/>} />
            <Route path='/productDetail/orderAddress/payment' element={<CustomerOrderPayment/>} />
            

            <Route path='/instructor/farmers' element={<InstructorsFarmerList/>} />
            <Route path='/instructor/reasearch' element={<InstructorInformation/>} />
            <Route path='/instructor/reasearch/form' element={<InstroctorReasearchForm/>} />
            <Route path='/instructor/advertisement' element={<InstructorAdvertisement/>} />
            <Route path='/instructor/session' element={<InstructorSessionList/>} />
            <Route path='/instructor/createProfile' element={<InstructorProfileCreate/>} />
            <Route path='/instructor/editProfile' element={<InstructorEditProfile/>} />
            <Route path='/instructorInfo/updateInfo/:id' element={<InstructorResearchUpdate />} />


            <Route path='/adminPlaceOrder' element={<AdminPlacedOrders />} />
            <Route path='/adminShippedOrder' element={<AdminShippedOrder />} />
            <Route path='/adminOutOfDeliveryOrder' element={<AdminOutForDeliveryOrder />} />
            <Route path='/adminDeliverdOrder' element={<AdminDeliveredOrder />} />


            <Route path='/login/user_register' element={<UserRegisterPage/>}/>
            
        </Routes>
    
        
      
    </div>
  );
}

export default RouterConfig
