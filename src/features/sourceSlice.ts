import { createSlice } from "@reduxjs/toolkit";
import { NewsState } from "../types/type";

const initial:NewsState[] = [];

const sourceSlice = createSlice({
  name: 'source',
  initialState: {value:initial},
  reducers:{
    seeking: (state,actions)=>{
      state.value = actions.payload
    },
  }
})


export const {seeking} = sourceSlice.actions;
export default sourceSlice.reducer;