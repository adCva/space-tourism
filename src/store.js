import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from "./Features/activePageSlice";

export default configureStore({
  reducer: {
    currentPage: activePageReducer
  }
});