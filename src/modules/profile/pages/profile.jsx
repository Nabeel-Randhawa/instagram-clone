import logo from "../../../images/logo.png"
import Tabs from "../components/tabs";
const Profile = () => {

    return (
        <div className="bg-background text-content w-full flex flex-col items-center p-5">
            <div className="flex items-center md:gap-20 gap-6">
                <div className="w-32">
                    <img className="rounded-full" src={logo} alt="" />
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="grid grid-cols-2 gap-2 items-middle md:flex md:gap-3">
                        <h1 className="text-lg col-span-2 font-bold mr-4">StarBucks</h1>
                        <button className="bg-secondary px-4 py-1 rounded-lg ">Edit Profile</button>
                        <button className="bg-secondary px-4 py-1 rounded-lg ">View Archive</button>
                        <button className="bg-secondary col-span-2 px-4 py-1 rounded-lg ">Ad Tools</button>
                    </div>
                    <div className="items-center md:flex hidden">
                        <h1 className="">34 posts</h1>
                        <h1 className="px-4 py-2 mx-6">51 followers</h1>
                        <h1 className="px-4 py-2 mx-6">89 followings</h1>
                    </div>
                    <div className="flex items-center">
                        <h1 className="">@starBucks</h1>
                    </div>
                </div>
            </div>
            <hr className="text-content" />
            <div className="mt-20 w-full flex flex-col items-center">
                <Tabs />
            </div>
        </div>
    )
}

export default Profile
