'use client'
import { CarResponse, ICarFilter } from '@/types/cars.types'
import { createContext, Dispatch, SetStateAction } from 'react'

type StateType = {
  cars: CarResponse | null
  filter: ICarFilter | null
  setFilter: Dispatch<SetStateAction<ICarFilter | null>>
}

export const CarContext = createContext<StateType | null>(null)
