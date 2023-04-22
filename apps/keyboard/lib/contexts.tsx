"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useReducer } from "react";

type ProviderProps = {
  children: ReactNode;
};

export function RootProvider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

// ----------------------------------------------------------------

type Action = {
  type: string;
  payload: string;
};
type State = {
  tab: string;
};

type TChatContext = {
  tab: string;
  setTab: (tab: string) => void;
};
type TTAbreducer = (state: State, action: Action) => State;

export const TabContext = createContext<TChatContext>({
  tab: "userInfo",
  setTab: () => {},
});

const reducer: TTAbreducer = (state, action) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        tab: action.payload,
      };
    default:
      return state;
  }
};

export function TabProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, { tab: "userInfo" });

  const tab = state.tab;
  const setTab = (tab: string) => dispatch({ type: "SET_TAB", payload: tab });

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
