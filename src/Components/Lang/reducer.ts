import { createReducer } from "../../utils/redux";
export const LANG_REQUEST_CHANGE = "LANG_REQUEST_CHANGE";
export const LANG_SUCCESS = "LANG_SUCCESS";
export const LANG_FAILED = "LANG_FAILED";

const langReducer = createReducer(LANG_SUCCESS, LANG_FAILED, LANG_REQUEST_CHANGE);
export default langReducer;