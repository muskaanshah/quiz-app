function Login() {
    return (
        <div className="container-body centered">
            <div className="w-72 rounded-md shadow-lg shadow-emerald-600/50 box-border p-4">
                <p className="text-center text-lg mb-2">Login</p>
                <form>
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
                    <input
                        type="submit"
                        value="Login"
                        className="button-cta w-full my-2"
                    />
                    <input
                        type="submit"
                        value="Login with test credentials"
                        className="button-cta w-full my-2 cursor-pointer"
                    />
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
