import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/app/store/slice'
import filterReducer from '@/app/store/filterSlice'
import openingReducer from '@/app/store/openingSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    opening: openingReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch