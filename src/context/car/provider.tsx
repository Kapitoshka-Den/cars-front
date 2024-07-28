'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { CarContext } from './context'
import { CarResponse, ICarFilter } from '@/types/cars.types'
import { getCars } from '@/api/cars.service'
import { ConfigProvider, theme } from 'antd'

export default function CarContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [filter, setFilter] = useState<ICarFilter | null>(null)
  const [cars, setCars] = useState<CarResponse | null>(null)

  useEffect(() => {
    getCars(filter).then((value) => setCars(value))
  }, [filter])

  const contextValue = useMemo(
    () => ({ cars: cars, filter, setFilter }),
    [cars, filter]
  )

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,

        token: {
          colorPrimaryBorderHover: 'rgba(255, 81, 0, 0.6)',
          colorInfoBorderHover: 'rgba(255, 81, 0, 0.6)',
        },
      }}
    >
      <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
    </ConfigProvider>
  )
}
