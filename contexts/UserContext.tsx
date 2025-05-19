import { account } from '@/lib/appwrite'
import { User } from '@/lib/types'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { ID } from 'react-native-appwrite'

export interface UserContextInterface {
    user: User,
    login: (email: string, password: string) => void,
    logout: () => void,
    register: (username: string,email: string, password: string) => void,
    authChecked: boolean
}

const emptyUser: User = {
    id: '',
    username: '',
    email: '',
    password: ''
}

const defaultUserContext: UserContextInterface = {
    user: emptyUser,
    authChecked: false,
    login: async () => {
        throw new Error('Login not implemented')
    },
    logout: async () => {
        throw new Error('Logout not implemented')
    },
    register: async () => {
        throw new Error('Register not implemented')
    }
}

export const UserContext = createContext<UserContextInterface>(defaultUserContext)

interface UserProviderProps {
    children: ReactNode
}

const validateInput = (value: string | undefined | null, fieldName: string): string => {
    if (value === undefined || value === null) {
        throw new Error(`${fieldName} cannot be empty`)
    }
    const trimmed = value.trim()
    if (!trimmed) {
        throw new Error(`${fieldName} cannot be empty`)
    }
    return trimmed
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User>(emptyUser)
    const [authChecked, setAuthChecked] = useState(false) //ensures auth state was checked

    async function login(email: string, password: string) {
        try {
            const validatedEmail = validateInput(email, 'Email')
            const validatedPassword = validateInput(password, 'Password')

            await account.createEmailPasswordSession(validatedEmail, validatedPassword)
            const response = await account.get()
            setUser({
                id: response.$id,
                username: response.name,
                email: response.email,
                password: response.password!
            })
        } catch(error: any) {
            throw new Error(error.message)
        }
    }

    async function register(username: string, email: string, password: string) {
        try {
            const validatedUsername = validateInput(username, 'Username')
            const validatedEmail = validateInput(email, 'Email')
            const validatedPassword = validateInput(password, 'Password')

            await account.create(ID.unique(), validatedEmail, validatedPassword, validatedUsername)
            await login(validatedEmail, validatedPassword)
        } catch(error: any) {
            throw new Error(error.message)
        }
    }

    async function logout() {
        try {
            await account.deleteSession('current')
            console.log('User has successfully logged out from active session.')
        } catch(error: any) {
            throw new Error(error.message)
        } finally {
            setUser(emptyUser)
        }
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get()

            setUser({
                id: response.$id,
                username: response.name,
                email: response.email,
                password: response.password!
            })
        } catch(error) {
            setUser(emptyUser)
        } finally {
            setAuthChecked(true)
        }
    }

    useEffect(() => {
        getInitialUserValue()
    }, [])

    return(
        <UserContext.Provider value={{ user, register, login, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}
