import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'


// Define the initial state using that type
const initialState = {
    data: {}
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  }
})

// export acction
export const { } = mainSlice.actions

// export main reducer
export default mainSlice.reducer