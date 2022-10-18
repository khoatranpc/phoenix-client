import { Action } from "../../Global/interface";

export const changeTheme = (payload: Action) => {
    return {
        type: payload.type,
        payload
    }
}