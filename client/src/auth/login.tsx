import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// interface LoginInputState {
//     email:string,
//     password:string
// }

const Login = () => {
    const [input,setInput]=useState<LoginInputState>({
        email:'',
        password:''
    })
    const [error,setError]=useState<Partial<LoginInputState>>({})
    const changeEventHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value})
    }

    const loginSubmitHandler=(e:FormEvent)=>{
        e.preventDefault()
        const result=userLoginSchema.safeParse(input)
        if(!result.success){
            const fieldError=result.error.formErrors.fieldErrors;
            setError(fieldError as Partial<LoginInputState>)
            return;
        }
        console.log(input) 
    }
  const loading = false; // Set true to test loader

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={loginSubmitHandler} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>

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
          { error && <span className=" text-sm text-red-500">{error.email}</span>}
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
           { error && <span className=" text-sm text-red-500">{error.password}</span>}
        </div>

        {/* Submit Button */}
        <div>
          <Button  type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? "Please wait..." : "Login"}
          </Button>
        </div>

        <div className=" flex justify-center">
          <Link to="/forgot-password" className=" text-blue-500" > Forgot Possword </Link>
        </div>

        <Separator />

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
