import PageFour from '@/components/form/page-four'
import PageOne from '@/components/form/page-one'
import PageThree from '@/components/form/page-three'
import PageTwo from '@/components/form/page-two'
import useFormInfo from '@/hooks/useFormInfo'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const PlanForm = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const { formInfo } = useFormInfo()

  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1)
    }
    console.log(formInfo)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
    console.log(formInfo)
  }

  const handleFinish = () => {
    // TODO: Implement finish logic
    console.log('Form completed!')
    router.push('/load_generate')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <PageOne />
      case 2:
        return <PageTwo />
      case 3:
        return <PageThree />
      case 4:
        return <PageFour />
      default:
        return <PageOne />
    }
  }

  return (
    <View className='flex-1'>
      {renderPage()}
      <View 
        style={{
          backgroundColor: '#c77ab9',
        }}
        className='flex-row justify-between items-center px-8 py-6'
      >
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={currentPage === 1}
          style={{
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
          className='px-8 py-3 rounded-full bg-[#9c6292]'
        >
          <Text 
            style={{
              fontFamily: 'Didot',
              color: 'white',
            }}
            className='text-xl'
          >
            Previous
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={currentPage === 4 ? handleFinish : handleNext}
          className='px-8 py-3 rounded-full bg-[#9c6292]'
        >
          <Text 
            style={{
              fontFamily: 'Didot',
              color: 'white',
            }}
            className='text-xl'
          >
            {currentPage === 4 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PlanForm