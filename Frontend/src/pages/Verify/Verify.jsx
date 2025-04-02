import React, { useEffect } from 'react'
import './Verify.css'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { Await, useNavigate } from 'react-router-dom';

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
        const success = searchParams.get("success")
        const orderId = searchParams.get("orderId")
        const {url} = useContext(StoreContext);
        const navigate = useNavigate();
        
        const verifyPayment = async => {
           const response =  axios.post(url+"/api/order/verify",{success,orderId});
           if (response.data.success) {
            navigate("/myorders")
           }
           else{
            navigate("/")
           }
        }
        useEffect(()=>{
            verifyPayment();
        })
  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
