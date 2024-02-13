import React, { useEffect } from 'react';
import  Router  from 'next/router';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Box } from '@chakra-ui/react';


 const UseAuth = ({children}:any)=>{
    
   const { address } = useAccount()

    useEffect(()=>{
    if(address){
        Router.push("/dashboard")
    }else{
        Router.push("/")
    }
    },[address])
    return  children
}

export default UseAuth;