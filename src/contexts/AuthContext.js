import React from 'react';


const AuthContext = React.createContext({
    userInfos: null,
    refreshUserInfos: () => null 
})

export default AuthContext