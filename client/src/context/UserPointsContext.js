import { createContext } from "react";

export const UserPointsContext = createContext({
  userPoints: [],
  setUserPoints: () => {}
});