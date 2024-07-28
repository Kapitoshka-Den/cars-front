'use client'

import { getModels } from '@/api/cars.service'
import { useCarContext } from '@/context/car/useContext'
import { ICarFilter, IModel } from '@/types/cars.types'
import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './model-select.module.scss'

export default function ModelSelect() {
  const { filter, setFilter } = { ...useCarContext() }
  const [models, setModels] = useState<IModel[] | undefined>(undefined)
  const [value, setValue] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    getModels(filter?.mark).then((models) => {
      setValue(undefined)
      setModels(models)
    })
  }, [filter?.mark])

  return (
    <Select
      className={styles.select}
      size="small"
      value={value}
      style={{ width: '100%' }}
      onChange={(models: string[]) => {
        setValue(models)
        if (setFilter)
          setFilter((state) => ({ ...state, models: models } as ICarFilter))
      }}
      mode="multiple"
      allowClear
      options={models?.map((item) => ({
        label:
          (filter?.mark == undefined ? item.mark : '') + ` - ${item.model}`,
        value: item.model,
      }))}
    />
  )
}
