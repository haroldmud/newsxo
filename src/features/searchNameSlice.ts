import { createSlice } from "@reduxjs/toolkit";

const  initial: null | string = null;

const searchNameSlice =  createSlice({
  name: 'searchName',
  initialState: {value:initial},
  reducers:{
    nameSearching: (state, actions)=>{
      state.value = actions.payload;
    }
  }
})

export const { nameSearching } = searchNameSlice.actions;
export default searchNameSlice.reducer;
