import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";
import func from "./middleware/func";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger("console")],
  });
}
