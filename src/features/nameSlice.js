import { createSlice } from "@reduxjs/toolkit";

const initial = null;

const nameSlice = createSlice({
  name: 'name',
  initialState: {value : initial},
  reducers:{
    naming:(state,actions)=>{
      state.value = actions.payload;
    }
  }
})

export const {naming} = nameSlice.actions;
export default nameSlice.reducer;
