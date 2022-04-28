import { ProgressCategory } from "../components";

function UserProfile() {
    return (
        <div className="container-body">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr]">
                <div className="flex flex-wrap justify-between items-start md:flex-col md:justify-start md:flex-row">
                    <div>
                        <div className="hidden md:block">
                            <p className="text-lg font-semibold">Account Details</p>
                            <div className="divider my-2"></div>
                        </div>
                        <p>Adarsh Balika</p>
                        <p>adarshbalika@gmail.com</p>
                        <p>username</p>
                    </div>
                    <div>
                        <div className="hidden md:block">
                            <p className="text-lg font-semibold mt-8">Account Settings</p>
                            <div className="divider my-2"></div>
                        </div>
                        <p className="cursor-pointer my-2">Change username</p>
                        <p className="cursor-pointer my-2">Change password</p>
                        <p className="text-red-500 cursor-pointer my-2">Logout</p>
                    </div>
                </div>
                <div>
                    <div className="divider my-4 md:hidden"></div>
                    <p className="text-2xl font-semibold">Your progress</p>
                    <div className="divider my-4 hidden md:block"></div>
                    <ProgressCategory />
                    <ProgressCategory />
                    <ProgressCategory />
                </div>
            </div>
        </div>
    );
}

export { UserProfile };
