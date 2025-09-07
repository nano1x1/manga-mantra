import { useState } from "react";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetPassword = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Reset Password</h1>
          <div className="w-9"></div>
        </div>

        {/* Success Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center animate-scale-in">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Check Your Email
          </h2>
          
          <p className="text-muted-foreground mb-2 max-w-sm leading-relaxed">
            We've sent a password reset link to
          </p>
          
          <p className="text-foreground font-medium mb-8">
            {email}
          </p>

          <p className="text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
            If you don't see it, check your spam folder or try again with a different email address.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 animate-slide-up">
          <Button className="btn-hero w-full">
            Open Email App
          </Button>
          
          <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
            Back to Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Reset Password</h1>
        <div className="w-9"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center animate-slide-up">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Forgot Password?
          </h2>
          <p className="text-muted-foreground">
            No worries! Enter your email and we'll send you a reset link
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
        </div>

        {/* Reset Button */}
        <Button 
          className="btn-hero w-full mt-8"
          onClick={handleResetPassword}
          disabled={!email}
        >
          Send Reset Link
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 animate-fade-in">
        <span className="text-muted-foreground">Remember your password? </span>
        <Button variant="ghost" className="text-primary hover:text-primary-hover p-0 h-auto font-medium">
          Sign In
        </Button>
      </div>
    </div>
  );
};