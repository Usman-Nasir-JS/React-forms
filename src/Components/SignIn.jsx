import { useState, useEffect } from "react";


function Login({ setIsLoggedIn }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ⭐ DEFAULT WELCOME MESSAGE
  useEffect(() => {
    setMessage("Dont have an account So first signup now! 😉");
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (!name && !email && !password) {
      setMessage("Please fill all the fields! 😒");
      return
    }

    if (name) {
      return
    }

    if (!email) {
      setMessage("Please enter your email! 😞");
      return;
    }

    if (!password) {
      setMessage("Please enter your password! 😞");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailUser = users.find((u) => u.email === email);

    let passUser = users.find((u) => u.password === password);


    if (emailUser && emailUser.password !== password) {
      setMessage("Password is invalid ❌");
      return;
    }

    if (passUser && passUser.email !== email) {
      setMessage("Email is invalid ❌");
      return;
    }

    // email + password match
    let foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setMessage(`Login Successful 😎 Welcome ${foundUser.name}`);
      
      setIsLoggedIn(true);

      // Reset Inputs
      setName("");
      setEmail("");
      setPassword("");
    }

    // Case 4: Nothing matches (both wrong)
    setMessage("Don’t have any account with this email & password 🧐");
  }

  return (
    <>
      <form className="items-center text-center" onSubmit={handleLogin}>

        <p className="my-4 text-[darkgreen]">{message}</p>

        <label className="hover:text-[darkgreen]">Full Name:</label>
        <input
          type="name"
          placeholder="Enter your name (optional)"
          className="border m-2 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label className="hover:text-[darkgreen]">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border m-2 ml-10 sm:ml-2.5 md:ml-10 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label className="hover:text-[darkgreen]">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border m-2 ml-2.5 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <div className="text-center">
          <button type="submit" className="border mt-7 py-1 px-5 pb-2 cursor-pointer hover:border-black hover:bg-[#004a00] focus:bg-[#004a00] focus:outline-none text-white">SignIn</button>
        </div>

      </form>

    </>
  );
}

export default Login;
