import lodash from 'lodash'

class ArticlesService {

    _articles = [
        {
            id:0,
            titre:"Fans des chats",
            description:"Un jeune ados fans de chats creer un compte instagram"
        },
        {
            id:1,
            titre:"Bitcoin",
            description:"Le bitcoin est en train d'exploser"
        },
        {
            id:2,
            titre:"Call of duty Wold War",
            description:"Le dernier jeux de call of duty fat un carton !!"
        },
        {
            id:3,
            titre:"COVID 19",
            description:"La pandémie mondiale va t'elle perdurer jusqu'en 2022 ??.."
        },
        {
            id:4,
            titre:"Titre raondom",
            description:"Je ne sais plus quoi mettre comme description..."
        },
    ]

    //Se lance au debut du projet pour ajouter des articles
    init(){
      return new Promise((resolve, reject) => {
        localStorage.setItem('articles',JSON.stringify(this._articles))
        setTimeout(() => {
          resolve(true)
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    getArticles(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("articles")))
        },(1000 + Math.floor(Math.random() * 1000)))
      })
    }

    getArticlesById(id){
        return new Promise((resolve, reject) => {
            let articles = JSON.parse(localStorage.getItem("articles"))
            let find = lodash.find(articles,(article)=>{
                return article.id == id
            })

            setTimeout(() => {
              resolve(find)
            },(1000 + Math.floor(Math.random() * 1000)))
        })
    }
    

  }
  
  const articleService = new ArticlesService()
  
  export default articleService