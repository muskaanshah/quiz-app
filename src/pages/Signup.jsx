import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="container-body centered">
            <div className="w-72 rounded-md shadow-lg shadow-emerald-600/50 box-border p-4">
                <p className="text-center text-lg mb-2">Sign Up</p>
                <form>
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter name"
                    />
                    <input
                        type="text"
                        className="input-text-auth"
                        placeholder="Enter email"
                    />
                    <input
                        type="password"
                        className="input-text-auth"
                        placeholder="Enter password"
                    />
                    <label className="text-sm flex items-center gap-2 my-2">
                        <input
                            type="checkbox"
                            className="accent-primary"
                            placeholder="Enter password"
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
