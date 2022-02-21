import { searchreducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(searchreducer)