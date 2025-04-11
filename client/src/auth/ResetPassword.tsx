import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyholeIcon,  } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword]=useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

   
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-800">Reset Password</h1>
          <p className="text-sm text-gray-600">
            Enter your new password reset old 
          </p>
        </div>

        <div className="relative w-full">
          <Input
            type="password"
            placeholder="Enter your new password"
            className="pl-10"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin w-4 h-4" />}
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
        <div className=" flex  justify-center items-center ">
          <span className=" capitalize  text-sm">back to login</span>  <Link to="/login" className=" text-blue-500 ps-2">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
