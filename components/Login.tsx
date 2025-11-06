"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Set your password here
  const CORRECT_PASSWORD = "adarsh2025";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a brief loading delay
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        // Store authentication in session storage
        sessionStorage.setItem("isAuthenticated", "true");
        onLogin();
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen executive-gradient flex items-center justify-center px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-executive-gold/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Login Card */}
        <div className="glass-card">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-executive-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-executive-gold" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              <span className="gold-accent">Adarsh Naidu</span>
            </h1>
            <h2 className="text-xl font-semibold text-white mb-2">Portfolio Access</h2>
            <p className="text-white/60 text-sm">Enter password to view portfolio</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-executive-gold/50 transition-all pr-12"
                  placeholder="Enter password"
                  autoFocus
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full px-6 py-3 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-executive-dark/30 border-t-executive-dark rounded-full animate-spin"></div>
                  Authenticating...
                </span>
              ) : (
                "Access Portfolio"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs">
              For access credentials, please contact the portfolio owner
            </p>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-xs flex items-center justify-center gap-2">
            <Lock size={12} />
            Secure access protected
          </p>
        </div>
      </div>
    </div>
  );
}
