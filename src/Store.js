import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "./Slice"
export const store = configureStore({
  reducer: {memorygame: gameReducer},
})