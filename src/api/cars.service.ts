import { CARS_PATH } from '@/constants'
import { CarResponse, ICarFilter, IMark, IModel } from '@/types/cars.types'
import { buildQueryParams } from '@/utils/query-params-builder'

const BASE_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? ''

export async function getCars(
  filter?: ICarFilter | null
): Promise<CarResponse> {
  const result = await fetch(
    `${BASE_URL}${CARS_PATH}` + (filter ? buildQueryParams(filter) : ''),
    { cache: 'force-cache', next: { revalidate: 300 } }
  )
  console.log(result.url)
  return await result.json()
}

export async function getMarks(): Promise<IMark[]> {
  const result = await fetch(BASE_URL + '/cars/marks', {
    cache: 'force-cache',
    next: { revalidate: 300, tags: ['marks'] },
  })
  return result.json()
}

export async function getModels(mark?: string): Promise<IModel[]> {
  const result = await fetch(
    BASE_URL + '/cars/models' + (mark ? `?mark=${mark}` : ''),
    {
      cache: 'force-cache',
      next: { revalidate: 300 },
    }
  )
  return result.json()
}
