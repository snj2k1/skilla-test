import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { callsReducer } from "./features/calls/calls-slice";

const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export default store;
