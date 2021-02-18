Elective React

Pour ce projet j'ai pu réalisé :

- La creation d'un compte avec verification d'email valide sur la page /register
- La connexion avec verificatin de l'user et de l'email valide sur la page /login
- La gestion des rôles ( si super_admin, on aura l'onglet AdminSettings dans le header )
- Impossible d'aller sur une page si on est pas log
- Page 404 pour les url inexistant

- Affichages des articles
- Au clic sur un article, on arrive sur la page avec les infos, sinon on peut y aller par l'url /articles/id ( utilisation des state des links et useLocation)
- Utilisation du context pour les infos de l'user
- Edition du password et email pour les regular et admin ( avec popup de confirmation )
- Ajout et suppresion d'un user pour le super_admin sur la page AdminSettings
- Le header avec les infos de l'user


Ce que je n'ai pas réalisé :

-Pagination ( maque de temps )
- Modification d'un article ( manque de temps )
- Ajout d'un article ( manque de temps )
-Edition et delete d'un article si admin ( maque de temps )
- Editer le role d'un user si admin ( manque de temps)
  



J'utilise React en entreprise, mais je n'avais jamais utilisé les contexts ce qui m'a fait perdre pas mal de temps.. C'est pourquoi je n'ai pas eut le temps de tout finir. De plus les services en mode Fake_Api m'ont également ralenti, j'aurais préféré avoir une petite api fonctionnel pour le faire? La gestion dans le local storage des articles et users n'étaient pas le plus pratique non plus..

J'ai fait au mieux !

Lors de l'arrivé sur la page, initialisation du localStorage avec les users et articles.

Pour se connecter, soit créer un compte soit :
    login : valentin@gmail.com
    password : 1234

Pour le superAdmin :
    login : superadmin@gmail.com
    password : 1234
