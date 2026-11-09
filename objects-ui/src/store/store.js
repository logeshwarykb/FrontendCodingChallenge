import { configureStore } from "@reduxjs/toolkit";
import ObjectReducer from "./reducers/ObjectReducer";

export const store = configureStore({
    reducer: ObjectReducer
})
