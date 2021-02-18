import lodash from 'lodash'


class AuthService {

    _superAdmin = {
      email: "superadmin@gmail.com",
      password:"1234",
      role:"super_admin"
    }

    _users = [
      {
        id:0,
        email:"valentin@gmail.com",
        password:"1234",
        role:"admin"
      },
      {
        id:1,
        email:"regular@gamil.com",
        password:"1234",
        role:"regular"
      },
      {
        id:2,
        email: "superadmin@gmail.com",
        password:"1234",
        role:"super_admin"
      }
    ]

    //Se lance au debut du projet pour creer le storage des users
    init(){
      return new Promise((resolve, reject) => {
        localStorage.setItem('users',JSON.stringify(this._users))
        localStorage.setItem('user_connected',"")
        setTimeout(() => {
          resolve(true)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    //Connexion
    signin(email,password){
      return new Promise((resolve, reject) => {
        let users = JSON.parse(localStorage.getItem('users'))
        let find = lodash.find(users,(user)=>{
          return (user.password == password && user.email == email)
        })
        localStorage.setItem("user_connected",JSON.stringify(find))
        setTimeout(() => {
          resolve(find)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

        //Deconnexion
        logout(){
          return new Promise((resolve, reject) => {
            localStorage.setItem("user_connected","")
            setTimeout(() => {
              resolve(true)
            },(1000 + Math.floor(Math.random() * 1000)))
          })
        }

                //Deconnexion
                updateUser(user){
                  return new Promise((resolve, reject) => {
                    localStorage.setItem("user_connected",JSON.stringify(user))
                    let users = JSON.parse(localStorage.getItem("users"))

                    lodash.forEach(users,(u)=>{
                      if(u.id == user.id){
                        console.log(u)
                        u.email = user.email
                        u.password = user.password
                      }
                    })

                    localStorage.setItem("users",JSON.stringify(users))
                    setTimeout(() => {
                      resolve(user)
                    },(1000 + Math.floor(Math.random() * 1000)))
                  })
                }

    //Veriication de connexion
    checkAuth(){
      return new Promise((resolve, reject) => {
        let storage = localStorage.getItem("user_connected")
        let user;
        if(storage){
          user = JSON.parse(storage)
        }
        
        setTimeout(() => {
          if(user){
            resolve(user)
          }else{
            resolve(null)
          }
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    //Eregistremet de l'utilsiateur dans le local storage
    register(email,password){
      return new Promise((resolve, reject) => {
        //Ajout de l'user dans le localStorage
        let storage = JSON.parse(localStorage.getItem('users'))
        storage.push({email:email,password:password})
        localStorage.setItem("users",JSON.stringify(storage))
        setTimeout(() => {
          resolve(true)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    //recuperer les users
    getUsers(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("users")))
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }
    

        //Eregistremet de l'utilsiateur dans le local storage
        addUser(user){
          return new Promise((resolve, reject) => {
            //Ajout de l'user dans le localStorage
            let storage = JSON.parse(localStorage.getItem('users'))
            storage.push(user)
            localStorage.setItem("users",JSON.stringify(storage))
            setTimeout(() => {
              resolve(true)
            },(1000 + Math.floor(Math.random() * 1000)))
          })
        }

              //suppression d'un user
              deleteUser(id){
                return new Promise((resolve, reject) => {
                  //Ajout de l'user dans le localStorage
                  let storage = JSON.parse(localStorage.getItem('users'))
                  let updated = []
                  lodash.forEach(storage,(user)=>{
                    if(user.id == id){
                        //nothing
                    }else{
                      updated.push(user)
                    }
                  })

                  localStorage.setItem("users",JSON.stringify(updated))
                  setTimeout(() => {
                    resolve(true)
                  },(1000 + Math.floor(Math.random() * 1000)))
                })
              }

  }
  
  const authService = new AuthService()
  
  export default authService