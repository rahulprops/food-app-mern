import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (/^[0-9a-zA-Z]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 5) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text").trim().slice(0, 6);
    if (/^[0-9a-zA-Z]{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      newOtp.forEach((char, index) => {
        if (inputRef.current[index]) {
          inputRef.current[index]!.value = char;
        }
      });
      inputRef.current[5]?.focus();
    }
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) return alert("Please enter a valid 6-digit code.");

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      console.log("Verifying OTP:", code);
      setLoading(false);
      navigate("/success"); // or any route after successful verification
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="p-8 rounded-md w-full max-w-md border border-gray-200 bg-white">
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-2xl text-gray-800">Verify Your Email</h1>
          <p className="text-sm text-gray-600">Enter the 6-digit code sent to your email address</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2">
            {otp.map((value, index) => (
              <Input
                key={index}
                type="text"
                value={value}
                ref={(el) => (inputRef.current[index] = el)}
                maxLength={1}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onChange={(e) => handleChange(index, e.target.value)}
                onPaste={handlePaste}
                className="md:w-12 md:h-12 w-10 h-10 text-center text-lg font-semibold rounded-lg focus:ring-indigo-500"
              />
            ))}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-500 mt-6 w-full flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
