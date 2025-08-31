import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Item {
  id: string
  title: string
  description: string
  createdAt: string
}

interface ItemsState {
  items: Item[]
}

const initialState: ItemsState = {
  items: []
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const newItem: Item = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toISOString()
      }
      state.items.push(newItem)
    },
    updateItem: (state, action: PayloadAction<{ id: string; title: string; description: string }>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          title: action.payload.title,
          description: action.payload.description
        }
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addItem, updateItem, deleteItem } = itemsSlice.actions

export const selectItems = (state: RootState) => state.items.items

export default itemsSlice.reducer