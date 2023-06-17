/* eslint-disable import/no-extraneous-dependencies */
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Actions
// const SET_GREETING = 'greetings/greetings/SET_GREETING';
// const url = 'http://127.0.0.1:3000/index';

// // initial state
// const initialState = [];

// // Action Creators
// // const setGreeting = (greetingObj) => ({
// //   type: SET_GREETING,
// //   payload: greetingObj,
// // });

// const getGreeting = createAsyncThunk(SET_GREETING, async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     return err;
//   }
// });

// // Reducer
// const greetingsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_GREETING:
//       return {
//         ...state,
//         greeting: action.payload.data,
//       };

//     default:
//       return state;
//   }
// };

// export default { getGreeting, greetingsReducer };
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SET_GREETING = 'greetings/greetings/SET_GREETING';
const url = 'http://localhost:3000/index';

const initialState = {
  greetingData: [],
  isLoading: true,
};

export const getGreeting = createAsyncThunk(SET_GREETING, async () => {
  const response = await axios.get(url);
  return response.data;
});

const greetingsReducer = createSlice({
  name: 'greeting',
  initialState,
  reducers: [],
  extraReducers: {
    [getGreeting.fulfilled]: (state, action) => {
      state.greetingData = action.payload;
      state.isLoading = false;
    },
    [getGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [getGreeting.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default greetingsReducer.reducer;
