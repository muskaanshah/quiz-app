import { useState } from "react";
import { userLogin } from "../services";
import { app } from "../utils/firebaseConfig";
import { getAuth } from "firebase/auth";

function Login() {
    const auth = getAuth();
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: "",
    });

    const formFieldInputHandler = (value, field) => {
        setSignInForm({ ...signInForm, [field]: value });
    };
    const signInFormHandler = (e) => {
        e.preventDefault();
        userLogin(auth, signInForm.email, signInForm.password);
    };
    const signInWithGoogleHandler = () => {
        userLogin(auth, "temp", "temp", true);
    };
    return (
        <div className="container-body centered">
            <div className="w-72 rounded-md shadow-lg shadow-emerald-600/50 box-border p-4">
                <p className="text-center text-lg mb-2">Login</p>
                <form onSubmit={signInFormHandler}>
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter email"
                        value={signInForm.email}
                        onChange={(e) => formFieldInputHandler(e.target.value, "email")}
                        required
                    />
                    <input
                        type="password"
                        className="input-text-auth"
                        placeholder="Enter password"
                        value={signInForm.password}
                        onChange={(e) =>
                            formFieldInputHandler(e.target.value, "password")
                        }
                        required
                    />
                    <input
                        type="submit"
                        value="Login"
                        className="button-cta w-full my-2"
                    />
                    <input
                        type="submit"
                        value="Fill test credentials"
                        className="button-cta w-full my-2 cursor-pointer"
                    />
                    <button
                        className="bg-skin-fillmuted rounded-md text-skin-base px-4 py-2 tracking-wide w-full my-2 cursor-pointer centered gap-2 box-border hover:border-emerald-600 hover:border"
                        onClick={signInWithGoogleHandler}
                    >
                        <i class="fa-brands fa-google"></i>
                        <span>Login with Google</span>
                    </button>
                </form>
                <p className="text-center centered mt-2 text-sm gap-2 cursor-pointer">
                    Create new account{" "}
                    <span className="material-icons text-base">navigate_next</span>
                </p>
            </div>
        </div>
    );
}

export { Login };
