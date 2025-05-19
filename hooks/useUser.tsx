import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('UseUser must be used within a UserProvider component')
    }

    return context
}

export default useUser