'use client'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { deleteItem } from '@/store/slices/itemsSlice'
import ItemCard from './ItemCard'

export default function ItemList() {
  const dispatch = useAppDispatch()
  // READ - Get items from Redux store
  const items = useAppSelector((state) => state.items.items)

  const handleDelete = (id: string) => {
    // DELETE - Remove item
    dispatch(deleteItem(id))
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No items yet. Add your first item!
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}