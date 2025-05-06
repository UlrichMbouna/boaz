import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/userSlice'
import serviceReducer from '../features/service/serviceSlice'



export const store = configureStore({
  reducer: {
    // user: userReducer,
    service:serviceReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
