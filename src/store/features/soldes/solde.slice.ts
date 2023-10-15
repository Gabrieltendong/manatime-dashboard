import { list_absence } from '@/constants/list_absence'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list_soldes: list_absence,
}

export const soldeSlice = createSlice({
    name: 'solde',
    initialState,
    reducers: {
     
      create_solde: (state, {payload}) => {
        state.list_soldes = [...state.list_soldes, payload]
      },
      remove_solde: (state, {payload}) => {
        state.list_soldes = state.list_soldes.filter((item) => item.id != payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { create_solde, remove_solde } = soldeSlice.actions
  
  export default soldeSlice.reducer