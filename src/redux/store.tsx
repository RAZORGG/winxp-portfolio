import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import systemReducer from "./systemSlice";

export default configureStore({
  reducer: {
    tab: tabReducer,
    system: systemReducer,
  },
});
