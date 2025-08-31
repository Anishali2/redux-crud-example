'use client'

import { useState } from 'react'
import ItemForm from './ItemForm'

interface ItemCardProps {
  item: {
    id: string
    title: string
    description: string
    createdAt: string
  }
  onDelete: (id: string) => void
}

export default function ItemCard({ item, onDelete }: ItemCardProps) {
  const [isEditing, setIsEditing] = useState(false)

  // Format date for display
  const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  if (isEditing) {
    return (
      <ItemForm
        itemToEdit={item}
        onComplete={() => setIsEditing(false)}
      />
    )
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-3">{item.description}</p>
      <p className="text-xs text-gray-400 mb-3">Created: {formattedDate}</p>
      
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  )
}