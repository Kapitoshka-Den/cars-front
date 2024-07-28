'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateByTag = (tag: string) => {
  revalidatePath(tag)
}
