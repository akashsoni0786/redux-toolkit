import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  amount:1
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.value +=1
    //   state.value = state.value+state.amount;
    },
    decrement: (state) => {
        state.value -=1
        // state.value = state.value-state.amount;
    },
    incrementByAmount: (state, action) => {
        // state.amount = action.payload
      state.value = state.value+action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value = state.value-action.payload;
    // state.amount = -action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
