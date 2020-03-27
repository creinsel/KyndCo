import { createContext } from 'react';

export const UserIdContext = createContext({

    userId: '',
    setUserId: () => { },
})