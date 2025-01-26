import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../api/user";

const Register = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[name,setName]=useState("")


  const handleSubmit = async(event) => {
    event.preventDefault();
    const res=await registerUser({name,email,password})
    if(res.sucsess){
      toast("rigister sucsessfull........................")
       setTimeout(() => {
       
      navigate("/");
    }, 5000);
    }
  };

  return (
    <main className="h-screen bg-stone-950 flex flex-col items-center justify-center text-white">
      <section className="bg-stone-900 border border-white p-8 md:px-20 md:py-10 flex flex-col items-center justify-center gap-3 rounded-tl-[48px] rounded-br-[48px]">
        <h3 className="text-2xl md:text-4xl font-semibold text-center max-w-[16rem]">
          Create an account now
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            className="bg-transparent focus-within:border-blue-400 border border-white px-4 py-2 focus-within:outline-none min-w-[16rem] max-w-[18rem] rounded-tr-[12px] rounded-bl-[12px]"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            type="text"
            name="name"
            id="name"
          />
          <input
            className="bg-transparent focus-within:border-blue-400 border border-white px-4 py-2 focus-within:outline-none min-w-[16rem] max-w-[18rem] rounded-tr-[12px] rounded-bl-[12px]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            type="email"
            name="email"
            id="email"
          />
          <input
            className="bg-transparent focus-within:border-blue-400 border border-white px-4 py-2 focus-within:outline-none min-w-[16rem] max-w-[18rem] rounded-tr-[12px] rounded-bl-[12px]"
            placeholder="Password"
value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
          <button
          onClick={() => navigate("/")}
            className="bg-white hover:scale-105 active:scale-95 text-black w-[10rem] py-2 rounded-tr-[12px] rounded-bl-[12px] hover:rounded-br-[12px] hover:rounded-tl-[12px] hover:rounded-tr-none hover:rounded-bl-none transition-all duration-200"
            type="submit"
          >
            Sign up
          </button>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="mt-5">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer underline underline-offset-4"
                onClick={() => navigate("/login")}
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
