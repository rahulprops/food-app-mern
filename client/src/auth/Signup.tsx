import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Contact2, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface SignInputState {
    fullName:string,
    email:string,
    password:string,
    contact:string
}

const Signup = () => {
    const [input,setInput]=useState<SignInputState>({
        fullName:'',
        email:'',
        password:'',
        contact:''
    })
    const changeEventHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value})
    }

    const loginSubmitHandler=(e:FormEvent)=>{
        e.preventDefault()
        console.log(input)
    }
  const loading = false; // Set true to test loader

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={loginSubmitHandler} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Signup to Your Account</h2>
         {/* fullname */}
         <div className="space-y-2">
          <Label htmlFor="fullname" className="text-gray-700 flex items-center gap-2">
            <User className="w-4 h-4" /> fullname
          </Label>
          <Input
            id="fullname"
            type="text"
            name="fullName"
            value={input.fullName}
            onChange={changeEventHandler}
            placeholder="Enter your fullname"
            className="w-full"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
            <Mail className="w-4 h-4" /> Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 flex items-center gap-2">
            <LockKeyhole className="w-4 h-4" /> Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter your password"
            className="w-full"
          />
        </div>
        {/* contect */}
        <div className="space-y-2">
          <Label htmlFor="contact" className="text-gray-700 flex items-center gap-2">
            <Contact2 className="w-4 h-4" /> contact
          </Label>
          <Input
            id="contact"
            type="taxt"
            name="contact"
            value={input.contact}
            onChange={changeEventHandler}
            placeholder="Enter your contact"
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button  type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? "Please wait..." : "Signup"}
          </Button>
        </div>

        <Separator />

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
          Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
