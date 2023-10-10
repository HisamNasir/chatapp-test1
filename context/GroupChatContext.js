import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const GroupChatContext = createContext();

export const GroupChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    groupChatId: null, // You can set this to the currently selected group chat ID
    groupChatInfo: {}, // Additional group chat information
  };

  const groupChatReducer = (state, action) => {
    switch (action.type) {
      case "SELECT_GROUP_CHAT":
        return {
          groupChatId: action.payload.groupChatId,
          groupChatInfo: action.payload.groupChatInfo,
        };

      // Add more cases for actions related to group chats if needed

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
