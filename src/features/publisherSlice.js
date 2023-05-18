import { createSlice } from "@reduxjs/toolkit";
import { sampleArray } from "../api/data";

const initial =sampleArray;

const publisherSlice = createSlice({
  name: 'fetching',
  initialState:{value: initial},
  reducers:{
    publishing: (state, actions)=>{
      state.value = actions.payload;
    },
  }
})

export const { publishing } = publisherSlice.actions;
export default publisherSlice.reducer;