import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Sign In</h1>
        <div className="w-9"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center animate-slide-up">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back
          </h2>
          <p className="text-muted-foreground">
            Sign in to continue your manga journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-warm pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-warm pl-10 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="text-right">
            <Button variant="ghost" className="text-primary hover:text-primary-hover p-0 h-auto font-medium">
              Forgot password?
            </Button>
          </div>
        </div>

        {/* Sign In Button */}
        <Button className="btn-hero w-full mt-8">
          Sign In
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 animate-fade-in">
        <span className="text-muted-foreground">Don't have an account? </span>
        <Button variant="ghost" className="text-primary hover:text-primary-hover p-0 h-auto font-medium">
          Sign Up
        </Button>
      </div>
    </div>
  );
};