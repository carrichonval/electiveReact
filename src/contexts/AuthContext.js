import React from 'react';


const AuthContext = React.createContext({
    userInfos: null,
    signUser: () => null,
    checkAuth:()=>null 
})

export default AuthContext