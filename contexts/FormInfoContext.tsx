import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { FormInfo } from '@/lib/types'

export interface FormInfoInterface {
  formInfo: FormInfo,
  modifySmoothies: (increment: boolean) => void,
  modifySalads: (increment: boolean) => void,
  modifyMainDishes: (increment: boolean) => void,
  modifySnacks: (increment: boolean) => void,
  modifySoups: (increment: boolean) => void,
  modifyDesserts: (increment: boolean) => void,
  modifyFoodsToInclude: (add: boolean, food: string) => void
  modifyFoodsToExclude: (add: boolean, food: string) => void
  modifyCuisinePreferences: (cuisines: string[]) => void
}

const emptyInfo = {
  id: '',
  userId: '',
  smoothies: 3,
  salads: 3,
  mainDishes: 3,
  snacks: 3,
  soups: 3,
  desserts: 3,
  foodsToInclude: [],
  foodsToAvoid: [],
  cuisines: []
}

const defaultFormInfoContext: FormInfoInterface = {
  formInfo: emptyInfo,
  modifySmoothies: () => {},
  modifySalads: () => {},
  modifyMainDishes: () => {},
  modifySnacks: () => {},
  modifySoups: () => {},
  modifyDesserts: () => {},
  modifyFoodsToInclude: () => {},
  modifyFoodsToExclude: () => {},
  modifyCuisinePreferences: () => {}
}

export const FormInfoContext = createContext<FormInfoInterface>(defaultFormInfoContext)


type FormInfoProviderProps = {
  children: React.ReactNode
}

export function FormInfoProvider({ children }: FormInfoProviderProps) {

  const [formInfo, setFormInfo] = useState<FormInfo>(emptyInfo)

  const modifySmoothies = (increment: boolean) => {
    setFormInfo({ ...formInfo, smoothies: increment ? formInfo.smoothies + 1 : formInfo.smoothies - 1 })
  }

  const modifySalads = (increment: boolean) => {
    setFormInfo({ ...formInfo, salads: increment ? formInfo.salads + 1 : formInfo.salads - 1 })
  }

  const modifyMainDishes = (increment: boolean) => {
    setFormInfo({ ...formInfo, mainDishes: increment ? formInfo.mainDishes + 1 : formInfo.mainDishes - 1 })
  } 

  const modifySnacks = (increment: boolean) => {
    setFormInfo({ ...formInfo, snacks: increment ? formInfo.snacks + 1 : formInfo.snacks - 1 })
  }

  const modifySoups = (increment: boolean) => {
    setFormInfo({ ...formInfo, soups: increment ? formInfo.soups + 1 : formInfo.soups - 1 })
  }

  const modifyDesserts = (increment: boolean) => {
    setFormInfo({ ...formInfo, desserts: increment ? formInfo.desserts + 1 : formInfo.desserts - 1 })
  }

  const modifyFoodsToInclude = (add: boolean = true, food: string) => {
    if (add) {
      setFormInfo({ ...formInfo, foodsToInclude: [...formInfo.foodsToInclude, food] })
    } else {
      setFormInfo({ ...formInfo, foodsToInclude: formInfo.foodsToInclude.filter(f => f !== food) })
    }
  }

  const modifyFoodsToExclude = (add: boolean, food: string) => {
    if (add) {
      setFormInfo({ ...formInfo, foodsToAvoid: [...formInfo.foodsToAvoid, food] })
    } else {
      setFormInfo({ ...formInfo, foodsToAvoid: formInfo.foodsToAvoid.filter(f => f !== food) })
    }
  }

  const modifyCuisinePreferences = (cuisines: string[]) => {
    setFormInfo({ ...formInfo, cuisines: cuisines })
  }
  
  return (
    <FormInfoContext.Provider value={{formInfo, modifySmoothies, modifySalads, modifyMainDishes, modifySnacks, modifySoups, modifyDesserts, modifyFoodsToInclude, modifyFoodsToExclude, modifyCuisinePreferences}}>
      {children}
    </FormInfoContext.Provider>
  )
}
