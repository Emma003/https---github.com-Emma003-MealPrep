import { useContext } from 'react'
import { FormInfoContext } from '@/contexts/FormInfoContext'

const useFormInfo = () => {
    const context = useContext(FormInfoContext)

    if (!context) {
        throw new Error('useFormInfo must be used within a FormInfoProvider')
    }

    return context
}

export default useFormInfo