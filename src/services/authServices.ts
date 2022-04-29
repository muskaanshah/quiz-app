import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const userLogin = async (
    auth: any,
    email: string,
    password: string,
    isGoogleSignIn: boolean = false
) => {
    try {
        const res = isGoogleSignIn
            ? await signInWithPopup(auth, googleProvider)
            : await signInWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (error: any) {
        console.log(error.message);
    }
};

const userSignup = async (auth: any, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (error: any) {
        console.log(error.message);
    }
};

export { userLogin, userSignup };
