import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { callsReducer } from "./features/calls/calls-slice";
import { filterReducer } from "./features/filters/filters-slice";

const store = configureStore({
  reducer: {
    calls: callsReducer,
    filters: filterReducer,
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
