import { createContext } from 'react';

export const SignInContext = createContext({
    signIn: false,
    setSignIn: () => { },

})