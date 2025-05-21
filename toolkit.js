import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addTocart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
   builder.addCase(addTocart, (state, action) => {
      state.push(action.payload);
   });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
   builder.addCase(login, (state, action) => {
      state.status = true;
   });
});

const store = configureStore({
   reducer: {
      login: loginReducer,
      cart: cartReducer,
   },
});
console.log("oncreate store :", store.getState());

store.subscribe(() => console.log("STORE CHANGE : ", store.getState()));

store.dispatch(addTocart({ id: 1, qty: 20 }));
store.dispatch(addTocart({ id: 2, qty: 30 }));
store.dispatch(login());

// const action1 = addTocart({ id: 1, qty: 20 });
// store.dispatch(action1);
