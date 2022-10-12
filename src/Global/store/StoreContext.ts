import { createContext } from 'react';
import { Action, GlobalState, Obj } from '../interface';
const StoreContext = createContext<[
    state: GlobalState | Obj | any,
    dispatch?: React.Dispatch<Action>
]>([null]);
export default StoreContext;