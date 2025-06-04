import PageFour from '@/components/form/page-four'
import PageOne from '@/components/form/page-one'
import PageThree from '@/components/form/page-three'
import PageTwo from '@/components/form/page-two'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const PlanForm = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleFinish = () => {
    // TODO: Implement finish logic
    console.log('Form completed!')
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
      <View className='flex-row justify-between px-4 py-4 bg-white'>
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-full ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#c77ab9]'}`}
        >
          <Text className='text-white font-semibold'>Previous</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={currentPage === 4 ? handleFinish : handleNext}
          className='px-6 py-2 rounded-full bg-[#c77ab9]'
        >
          <Text className='text-white font-semibold'>
            {currentPage === 4 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PlanForm