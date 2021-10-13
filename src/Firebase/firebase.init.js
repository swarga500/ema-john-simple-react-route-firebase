import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;

/* steps for project 

1.firebase:
2. create web app
3. get configureation
4. enable auth method


-------------------
step2
1. create login component
2. create register component
3. create route for login and register

---------------------
step3
1.set uo sign in method
2. set signout method
3. user state
4. special observer
5. return neccessary methods and states from useFirebase

-------------------
step4
1.create a auth context
2. create context provider
3. set context provider value
4. use auth provider
5. create useAuth hook

-------------------------
step5
1.create privet rout


*/