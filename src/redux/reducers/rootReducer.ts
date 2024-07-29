import { combineReducers } from "@reduxjs/toolkit";
import doctorReducer from "./doctorReducer";
import timeReducer from "./timeReducer";
import appoinmentReducer from "./appoinmentReducer";
import serviceReducer from "./serviceReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    appointment: appoinmentReducer,
    category: categoryReducer,
    doctor: doctorReducer,
    service: serviceReducer,
    time: timeReducer,
});

export default rootReducer;