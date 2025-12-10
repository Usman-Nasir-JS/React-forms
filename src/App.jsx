import './App.css';
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import './Components/style.css'


function App() {

  return (
    <div id="body" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        
      <div className="w-full max-w-5xl flex justify-around gap-10 flex-wrap">

        <div className="w-full sm:w-[40%] shadow-lg p-6 rounded-xl bg-black text-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <SignUp />
        </div>

        <div className="w-full sm:w-[40%] shadow-lg p-6 rounded-xl bg-black text-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
            <SignIn />
        </div>

      </div>

    </div>
  );
}

export default App;