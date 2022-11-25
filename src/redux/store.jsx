import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";


const store = configureStore({reducer: CounterReducer})


export default store; 