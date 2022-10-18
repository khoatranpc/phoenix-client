import { createReducer } from "../../utils/redux";
export const THEME_REQUEST_CHANGE = "THEME_REQUEST_CHANGE";
export const THEME_SUCCESS = "THEME_SUCCESS";
export const THEME_FAILED = "THEME_FAILED";

const themeReducer = createReducer(THEME_SUCCESS, THEME_FAILED, THEME_REQUEST_CHANGE);
export default themeReducer;