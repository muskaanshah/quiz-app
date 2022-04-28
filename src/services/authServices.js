import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const userLogin = async (auth, email, password, isGoogleSignIn = false) => {
    try {
        const res = googleProvider
            ? await signInWithPopup(auth, googleProvider)
            : await signInWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (err) {
        console.log(err.message);
    }
};

const userSignup = async (auth, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);
    } catch (err) {
        console.log(err.message);
    }
};

export { userLogin, userSignup };
