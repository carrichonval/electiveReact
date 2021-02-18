class AuthService {

    _user = {
      name: "Coucou"
    }

    signin(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this._user)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }
  
    updateUser(user){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._user = user
          resolve(this._user)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }


  }
  
  const authService = new AuthService()
  
  export default authService