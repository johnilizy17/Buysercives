import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Center, Spinner, useToast } from '@chakra-ui/react';
import { RegisterUser } from '@/API/userService';
import { async } from '@firebase/util';
import { setUser } from '@/app/features/auth/userSlice';
import { store } from "@/app/store";

const WalletAuth = ({ children }: any) => {


    const { address } = useAccount()
    const [profile, setProfile] = useState(false)
    const toast = useToast()


    async function profileFetch(e: any) {
        try {
            const { data } = await RegisterUser({ wallet: e })
            store.dispatch(setUser(data));
            if (data.bio && data.fullname && data.fullname.length > 1) {

            } else {
                Router.push("/profile-settings")
                toast({
                    position: "top-right",
                    title: "Profile details",
                    description: "kindly fill in your profile details ",
                    status: "error",
                    isClosable: true
                })
            }

            setProfile(true)

        } catch (err) {

        }
    }

    useEffect(() => {
        if (address) {
            profileFetch(address)
        } else {
            Router.push("/")
        }
    }, [address])

    return (
        <>
            {profile ?
                children :
                <Center h="100vh" bg="#000">
                    <Spinner size="xl" color="#fff" />
                </Center>
            }
        </>
    )

}

export default WalletAuth