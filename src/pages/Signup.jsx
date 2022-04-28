import { useState } from "react";
import { Link } from "react-router-dom";
import { userSignup } from "../services";
import { app } from "../utils/firebaseConfig";
import { getAuth } from "firebase/auth";

function Signup() {
    const auth = getAuth();
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const formFieldInputHandler = (value, field) => {
        setSignUpForm({ ...signUpForm, [field]: value });
    };
    const signUpFormHandler = (e) => {
        e.preventDefault();
        userSignup(auth, signUpForm.email, signUpForm.password);
    };
    return (
        <div className="container-body centered">
            <div className="w-72 rounded-md shadow-lg shadow-emerald-600/50 box-border p-4">
                <p className="text-center text-lg mb-2">Sign Up</p>
                <form onSubmit={signUpFormHandler}>
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter full name"
                        value={signUpForm.name}
                        onChange={(e) => formFieldInputHandler(e.target.value, "name")}
                        required
                    />
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter email"
                        value={signUpForm.email}
                        onChange={(e) => formFieldInputHandler(e.target.value, "email")}
                        required
                    />
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter user name"
                        value={signUpForm.username}
                        onChange={(e) =>
                            formFieldInputHandler(e.target.value, "username")
                        }
                        required
                    />
                    <input
                        type="password"
                        className="input-text-auth"
                        placeholder="Enter password"
                        value={signUpForm.password}
                        onChange={(e) =>
                            formFieldInputHandler(e.target.value, "password")
                        }
                        required
                    />
                    <label className="text-sm flex items-center gap-2 my-2">
                        <input
                            type="checkbox"
                            className="accent-primary"
                            placeholder="Enter password"
                            required
                        />
                        I accept all{" "}
                        <Link to="/signup" className="text-skin-base underline">
                            Terms and conditions
                        </Link>
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                        className="button-cta w-full my-2 cursor-pointer"
                    />
                </form>
                <p className="text-center centered mt-2 text-sm gap-2 cursor-pointer">
                    Already have an account{" "}
                    <span className="material-icons text-base">navigate_next</span>
                </p>
            </div>
        </div>
    );
}

export { Signup };
