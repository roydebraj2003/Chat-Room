import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       alert(data.message); // Display success message
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

  return (
    // <div className="h-screen w-screen flex justify-center items-center">
    //   <Card className="w-[400px] p-6">
    //     <CardContent>
    //       <h2 className="text-lg font-semibold text-center mb-4">Forgot Password</h2>
    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div>
    //           <Label htmlFor="email" className="block mb-2">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <Button type="submit" className="w-full">Send Reset Link</Button>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </div>
    <h1>Under construction - next update !!!</h1>
  );
};

export default ForgotPassword;