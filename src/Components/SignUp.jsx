import { useState, useEffect } from "react";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ⭐ DEFAULT WELCOME MESSAGE
  useEffect(() => {
    setMessage("Welcome! Do a signin now 😊");
  }, []);

  function handleForm(e) {
    e.preventDefault();

    if (!name && !email && !password) {
      setMessage("Please fill all the fields! 😒");
      return
    }

    if (!name) {
      // message.style.color = "red";
      setMessage("Please fill the name field! 😞");
      return;
    }

    if (!email) {
      setMessage("Please fill the email field 😞");
      return;
    }

    if (!password) {
      setMessage("Please fill the password field 😞");
      return;
    }

    // ⭐ STRONG PASSWORD CHECK
    if (password.length < 6) {
      setMessage("Please set a strong password! At least 6 digits 😤");
      return;
    }

    // Get old users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // --------- CHECK IF EMAIL ALREADY EXISTS ----------
    let alreadyUser = users.find((u) => u.email === email);

    if (alreadyUser) {
      setMessage("You have already signed up with this email 🫡");
      return;
    }

    // --------- ADD NEW USER ----------
    let newUser = {
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("You are successfully signed up 😎");

    // Reset Inputs
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>

      <form className="items-center text-center" onSubmit={handleForm}>

        <p className="my-4 text-[darkgreen]">{message}</p>

        <label className="hover:text-[darkgreen]">Full Name:</label>
        <input 
          type="text" 
          placeholder="Enter your full name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          className="border m-2 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
        />
        <br />

        <label className="hover:text-[darkgreen]">Email:</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="border m-2 ml-10 sm:ml-2.5 md:ml-10 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
        />
        <br />

        <label className="hover:text-[darkgreen]">Password:</label>
        <input 
          type="password" 
          placeholder="Enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border m-2 ml-2.5 py-1 px-3 hover:border-[darkgreen] focus:border-2 focus:border-[#005100] focus:outline-none"
        />
        <br />

        <div className="text-center">
          <button type="submit" className="border mt-7 py-1 px-5 pb-2 cursor-pointer hover:border-black hover:bg-[#004a00] focus:bg-[#004a00] focus:outline-none text-white">SignUp</button>
        </div>

      </form>

    </>
  );
}

export default SignUp;
