import type { NextApiRequest, NextApiResponse } from 'next'
import { tacosList } from '../../mock/tacos'
import { saladList } from '../../mock/salad'
import { coffeeList } from '../../mock/coffee'
import { juiceList } from '../../mock/juice'
import { Item } from '../../types/items'

type Data = {
  data: Item[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: [...tacosList, ...saladList, ...coffeeList,...juiceList] })
}
