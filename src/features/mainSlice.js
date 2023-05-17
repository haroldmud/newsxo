import { createSlice } from "@reduxjs/toolkit";
import { sampleArray } from "../api/data";

const initial =sampleArray;

const mainSlice = createSlice({
  name: 'fetching',
  initialState:{value: initial},
  reducers:{
    fetching: (state, actions)=>{
      state.value = actions.payload;
    }
  }
})

export const { fetching } = mainSlice.actions;
export default mainSlice.reducer;