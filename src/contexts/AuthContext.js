import React from 'react';


const AuthContext = React.createContext({
    userInfos: null,
    signUser: () => null,
    checkAuth:()=>null,
    logout: ()=>null,
    updateUser:()=>null
})

export default AuthContext