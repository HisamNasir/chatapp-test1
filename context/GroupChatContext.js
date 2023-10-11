import { createContext, useContext, useReducer } from "react";

export const GroupChatContext = createContext();

export const GroupChatContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    selectedGroupChat: null,
  };

  const groupChatReducer = (state, action) => {
    switch (action.type) {
      case "SET_SELECTED_GROUP_CHAT":
        return {
          ...state,
          selectedGroupChat: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(groupChatReducer, INITIAL_STATE);

  return (
    <GroupChatContext.Provider value={{ groupChatData: state, dispatch }}>
      {children}
    </GroupChatContext.Provider>
  );
};
