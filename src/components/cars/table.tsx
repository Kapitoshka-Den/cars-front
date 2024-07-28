'use client'

import { useCarContext } from '@/context/car/useContext'
import { ICar, ICarFilter } from '@/types/cars.types'
import { Table, TableProps } from 'antd'
import React from 'react'
import styles from './table.module.scss'

const columns: TableProps<ICar>['columns'] = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: 'id',
  },
  {
    title: 'Марка/модель',
    key: 'mark',
    render: (car: ICar) => `${car.mark} ${car.model}`,
  },
  {
    title: 'Модификация',
    key: 'modification',
    render: (car: ICar) =>
      `${car.engine.transmission} (${car.engine.power} л.с.) ${
        car.drive ?? ''
      }`,
  },
  {
    title: 'Комплектация',
    dataIndex: 'equipmentName',
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    render: (price: number) => `${price}₽`,
  },
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    render: (date: Date) => <span>{new Date(date).toLocaleString()}</span>,
  },
]

export default function CarsTable() {
  const { cars, setFilter } = { ...useCarContext() }
  return (
    <>
      <Table
        className={styles.table}
        columns={columns}
        size="small"
        rowKey="_id"
        pagination={{
          className: styles.pagination,
          defaultPageSize: 20,
          showSizeChanger: true,
          total: cars?.count,
          onChange: (page, pageSize) => {
            if (setFilter) {
              setFilter(
                (state) =>
                  ({ ...state, pageNumber: page, pageSize } as ICarFilter)
              )
            }
          },
        }}
        dataSource={cars?.cars}
      />
    </>
  )
}
