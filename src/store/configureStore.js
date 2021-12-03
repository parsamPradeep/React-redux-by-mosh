import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";
import api from "./middleware/api";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api, logger("console")],
  });
}
