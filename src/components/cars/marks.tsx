import { getMarks } from '@/api/cars.service'
import React from 'react'
import MarkLink from './mark-link'
import styles from './marks.module.scss'
import { ALL_MODEL } from '@/constants'

export default async function Marks() {
  const remoteMarks = await getMarks()
  const marks = [
    ...remoteMarks,
    {
      mark: ALL_MODEL,
      count: remoteMarks.reduce(
        (value, prevValue) => value + prevValue.count,
        0
      ),
    },
  ]
  return (
    <div className={styles.list}>
      {marks.map((mark, index) => (
        <MarkLink key={index} mark={mark} />
      ))}
    </div>
  )
}
