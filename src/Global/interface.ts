import { LANG, ROLE, THEME } from "./enum";

interface User {
    id?: string;
    role?: ROLE;
    name?: string;
    email?: string;
    phoneNumber?: string;

}
export interface Action {
    payload?: Obj;
    type?: string;
}

export interface Obj {
    // eslint-disable-next-line
    [key: string]: any
}

export interface GlobalState {
    Lang?: string;
    Theme?: string;
    User?: User | null;
}