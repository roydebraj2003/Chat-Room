import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add logic for authentication here
  };

  return (
    <div className="h-screen w-screen flex justify-center ">
      <div className="h-[250px] w-[550px] mt-20">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 border rounded-lg shadow-md max-w-sm mx-auto"
          >
          <p className="font-semibold text-lg">Sign to your account!</p>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-[blue]">Login</Link>
      </p>
        </form>
        
      </div>
      
    </div>
  );
};
 export default SignUp