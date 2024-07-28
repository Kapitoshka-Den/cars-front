export type CarResponse = {
  cars: ICar[]
  count: number
}

export interface ICar {
  mark: string
  model: string
  engine: IEngine
  drive?: string | undefined
  price: number
  equipmentName: string
  createAt: Date
}

export interface IEngine {
  power: number
  volume: number
  transmission: string
  fuel: string
}

export interface ICarFilter {
  mark: string
  models: string[]
  pageNumber: number
  pageSize: number
}

export interface IMark {
  mark: string
  count: number
}

export interface IModel {
  model: string
  mark: string
}
