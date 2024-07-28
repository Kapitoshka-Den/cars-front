'use client'

import { useCarContext } from '@/context/car/useContext'
import { ICarFilter, IMark } from '@/types/cars.types'
import React from 'react'
import styles from './mark-link.module.scss'
import { ALL_MODEL } from '@/constants'

export default function MarkLink({ mark }: { mark: IMark }) {
  const { setFilter } = { ...useCarContext() }
  return (
    <div
      className={styles.link}
      onClick={() => {
        if (setFilter)
          setFilter(
            (state) =>
              ({
                ...state,
                pageNumber: 1,
                models: [],
                mark: mark.mark === ALL_MODEL ? undefined : mark.mark,
              } as ICarFilter)
          )
      }}
    >
      <span className={styles.mark}>{mark.mark}</span>
      <span className={styles.count}>{mark.count}</span>
    </div>
  )
}
