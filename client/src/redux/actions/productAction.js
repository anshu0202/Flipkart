

import axios from "axios"


import * as actionTypes from "../constants/productConstant"

const URL=process.env.REACT_APP_BACK_URL;

export const getProducts= ()=>async(dispatch)=>{
    //   console.log("dispatch is ", typeof(dispatch))
      
    try{

        console.log("url is ",URL)
        const {data}= await axios.get(`${URL}/products`)
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
    }
    catch(error){
        console.log("Error while calling getProducts API ", error.message);                
         dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
    }
}

export const getProductDetails= (id)=>async(dispatch)=>{
     
      try{

        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const {data} =await axios.get(`${URL}/product/${id}`);

        
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data});
      }
      catch(error){
                console.log("Error while getting details of given product ",error.message)

                 dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message})
      }
}



