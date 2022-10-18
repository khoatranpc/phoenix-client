// import { CHANGE_LANG } from "../../Components/Lang/action";
// import { CHANGETHEME } from "../../Components/Theme/action";
import { HELLO } from "../actions";
import { Action, GlobalState, Obj } from "../interface"

const StoreReducer = (state: GlobalState | null | Obj = null, action: Action) => {
    switch (action.type) {
        case HELLO:
            return {
                ...state,
                ...action.payload
            };
        // case CHANGETHEME:
        //     return {
        //         ...state,
        //         Theme: action.payload
        //     };
        // case CHANGE_LANG:
        //     return {
        //         ...state,
        //         Lang: action.payload
        //     };
        default:
            return state
    }
}
export { StoreReducer }