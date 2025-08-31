'use client'

import { useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { addItem, updateItem } from '@/store/slices/itemsSlice'

interface ItemFormProps {
  // For update: provide existing item data
  itemToEdit?: {
    id: string
    title: string
    description: string
  }
  onComplete?: () => void
}

export default function ItemForm({ itemToEdit, onComplete }: ItemFormProps) {
  const dispatch = useAppDispatch()
  
  // Initialize form with edit data or empty
  const [title, setTitle] = useState(itemToEdit?.title || '')
  const [description, setDescription] = useState(itemToEdit?.description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (itemToEdit) {
      // Update existing item
      dispatch(updateItem({
        id: itemToEdit.id,
        title,
        description
      }))
    } else {
      // Add new item
      dispatch(addItem({
        title,
        description
      }))
    }
    
    // Reset form
    setTitle('')
    setDescription('')
    onComplete?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">
        {itemToEdit ? 'Edit Item' : 'Add New Item'}
      </h3>
      
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title"
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Enter description"
        />
      </div>
      
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {itemToEdit ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  )
}