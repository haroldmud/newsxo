import { createSlice } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const initial = [];

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