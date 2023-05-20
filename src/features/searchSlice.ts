import { createSlice } from "@reduxjs/toolkit";
import { sampleArray } from "../api/data";
import { NewsState } from "../types/type";

const initial: NewsState[] = sampleArray;

const searchSlice = createSlice({
  name: 'search',
  initialState: {value: initial},
  reducers:{ 
    searching: (state, actions)=>{
    state.value = actions.payload;
  }}
})

export const { searching } = searchSlice.actions;
export default searchSlice.reducer;
