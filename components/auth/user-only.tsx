import useUser from '@/hooks/useUser'
import { useRouter } from 'expo-router'
import React, { ReactNode, useEffect } from 'react'
import ThemedLoader from '../themed/themed-loader'

interface UserOnlyProps {
    children: ReactNode
}

const UserOnly = ({ children }: UserOnlyProps) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && !user.email) {
            router.replace("/login")
        }
    }, [user, authChecked])
    

    if (!authChecked || !user.email) {
        return (
            <ThemedLoader />
        )
    }

    return children
}

export default UserOnly