import { Action } from "../../Global/interface"

export const switchLang = (payload: Action) => {
    return {
        type: payload.type,
        payload
    }
}