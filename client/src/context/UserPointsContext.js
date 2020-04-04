import { createContext } from "react";

export const UserPointsContext = createContext({
  userPoints: 0,
  setUserPoints: () => {}
});