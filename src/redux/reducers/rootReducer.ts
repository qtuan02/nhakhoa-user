import { combineReducers } from "@reduxjs/toolkit";
import doctorReducer from "./doctorReducer";
import timeReducer from "./timeReducer";
import scheduleReducer from "./scheduleReducer";
import appoinmentReducer from "./appoinmentReducer";
import serviceReducer from "./serviceReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    doctor: doctorReducer,
    time: timeReducer,
    schedule: scheduleReducer,
    appoinment: appoinmentReducer,
    service: serviceReducer,
    category: categoryReducer
});

export default rootReducer;