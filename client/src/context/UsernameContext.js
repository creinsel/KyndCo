import { createContext } from "react";

export const UsernameContext = createContext({
  username: "",
  setUsername: () => {}
});
