class AuthService {

    _superAdmin = {
      email: "superadmin@gmail.com",
      password:"1234",
      role:"super_admin"
    }

    _users = []

//Se lance au debut du projet pour supprimer les users
    init(){
      return new Promise((resolve, reject) => {
        localStorage.setItem('users',JSON.stringify(this._users))
        setTimeout(() => {
          resolve(true)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    signin(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    register(email,password){
      return new Promise((resolve, reject) => {
        //Ajout de l'user dans le localStorage
        let storage = JSON.parse(localStorage.getItem('users'))
        console.log("Storage",storage)
        storage.push({email:email,password:password})
        localStorage.setItem("users",JSON.stringify(storage))
        console.log(JSON.parse(localStorage.getItem('users')))
        setTimeout(() => {
          resolve(true)
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