// import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialCounterState = {
  counter: 0,
  users: [],
};

const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "incrementBy5") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      counter: (state.counter = 0),
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "FETCH_USERS") {
    return {
      ...state,
      users: action.payload,
    };
  }
  return state;
};
const store = createStore(counterReducer, applyMiddleware(thunk));
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     //pure function don't any side effect
//     increment(state) {
//       state.counter++;
//     },
//     incrementBy5(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     api(state, action) {
//       state.vbl = action.payload;
//     },
//     moreVbl(state) {
//       state.more = state.more;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,

//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;

// export const authActions = authSlice.actions;

export default store;
