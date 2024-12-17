import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./fire"

export default async function Login(email : string, password : string) {
    return await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => { 
            if (userCredential.user) {
                return userCredential.user
            }
            return null
        })
        .catch(error => console.log(error))
}

export async function SignUp(email : string, password : string) {
    await createUserWithEmailAndPassword(auth, email, password)
}

export function logOut() {
    signOut(auth)
        .then(res => {return res})
        .catch(error => console.log(error))
}
