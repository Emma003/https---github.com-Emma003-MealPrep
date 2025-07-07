import useUser from '@/hooks/useUser'
import { useRouter } from 'expo-router'
import React, { ReactNode, useEffect } from 'react'
import ThemedLoader from '../themed/themed-loader'

interface GuestOnlyProps {
    children: ReactNode
}

const GuestOnly = ({ children }: GuestOnlyProps) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if(authChecked && user.email) {
            router.replace('/home')
        }
    }, [authChecked, user])

    if(!authChecked || user.email) {
        return (
            <ThemedLoader />
        )
    }

    return children
}

export default GuestOnly