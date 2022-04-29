import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const userLogin = async (auth: any, email:string, password:string, isGoogleSignIn = false) => {
    try {
        const res = isGoogleSignIn
            ? await signInWithPopup(auth, googleProvider)
            : await signInWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (err: any) {
        console.log(err.message);
    }
};

const userSignup = async (auth:any, email:string, password:string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (err: any) {
        console.log(err.message);
    }
};

export { userLogin, userSignup };
