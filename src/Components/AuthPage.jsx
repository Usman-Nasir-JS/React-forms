import { useState } from "react";
import SignUp from "./signUp";
import SignIn from "./SignIn";
import './style.css'

function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>

      {isLoggedIn ? (
    
        <div id="body" className="min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-6 ">Welcome to the Home Page 🎉</h1>

            <button onClick={handleLogout} className="px-7 py-3 cursor-pointer bg-black hover:border-black hover:bg-green-800 hover:text-black text-2xl focus:bg-[#004a00] focus:outline-none rounded-lg shadow">
                Logout ➜]
            </button>
        </div>

      ) : (
        
        <div id="body" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        
            <div className="w-full max-w-5xl flex justify-around gap-10 flex-wrap">

                <div className="w-full sm:w-[40%] shadow-lg p-6 rounded-xl bg-black text-white">
                    <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                    <SignUp />
                </div>

                <div className="w-full sm:w-[40%] shadow-lg p-6 rounded-xl bg-black text-white">
                    <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
                    <SignIn setIsLoggedIn={setIsLoggedIn} />
                </div>

            </div>

        </div>

      )}

    </>
  );

}


export default AuthPage;
