import { HELLO } from "../actions";
import { Obj } from "../interface";

// example actions
export const GetFirst = (payload: Obj) => {
    return {
        type: HELLO,
        payload
    }
}