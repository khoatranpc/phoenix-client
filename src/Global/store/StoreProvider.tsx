import React, { useReducer } from 'react';
import i18next from 'i18next';
import { ROLE, THEME } from '../enum';
import { GlobalState } from '../interface';
import StoreContext from './StoreContext';
import { StoreReducer } from './StoreReducer';

const InitGlobalState: GlobalState = {
  Theme: THEME.LIGHT,
  Lang: i18next.language,
  User: {
    role: ROLE.CUSTOMER
  }
}
export const StoreProvider = ({ children }: {
  children: React.ReactElement
}) => {
  const [state, dispatch] = useReducer(StoreReducer, InitGlobalState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
