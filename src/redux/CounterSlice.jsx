import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:"counter",
        initialState:{
            compteur:0,
        },
        reducers:{
            increment: (state,action) => {
                state.compteur += action.payload
            },
            decrement: (state,action) => {
                state.compteur -= action.payload
            },
            initialise: (state,action) => {
                state.compteur = 100
            },
        }
    }
);

export const {increment, decrement, initialise} = counterSlice.actions
export default counterSlice.reducer