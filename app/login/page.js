"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

import runningBoy from '../../assets/svg/running-boy-removed.svg';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay for AI mock verification
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === 'demo@learnai.com' && password === 'password123') {
      // Success, redirect to dashboard
      router.push('/');
    } else {
      setError('Invalid credentials. Please try demo@learnai.com / password123');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
      
      {/* Left Side: Authentication Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative bg-background">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-foreground mb-4">Welcome back!</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Simplify your workflow and boost your productivity with <span className="font-semibold text-foreground">LearnSphere AI</span>. Get started for free.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-destructive/15 text-destructive text-sm p-3 rounded-2xl border border-destructive/30"
              >
                {error}
              </motion.div>
            )}

            {/* Email Field */}
            <div className="space-y-2 relative">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-full px-6 bg-transparent border-input focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary text-base"
                placeholder="Username or Email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2 relative">
              <div className="relative">
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 rounded-full pl-6 pr-12 bg-transparent border-input focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary text-base"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end pt-1">
              <a href="#" className="text-sm font-semibold text-foreground hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-14 rounded-full font-bold text-base bg-foreground text-background hover:bg-foreground/90 transition-all shadow-md"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Authenticating...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </motion.div>
            </div>
          </form>

          {/* Signup Link */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Not a member?{' '}
              <a href="#" className="font-semibold text-[#4CAF50] hover:text-[#388E3C] hover:underline">
                Register now
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Visual Asset (Hidden on mobile) */}
      <div className="hidden lg:flex flex-col w-1/2 p-4 md:p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full h-full bg-[#F4F9F4] rounded-[2.5rem] flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Main Illustration */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center mb-10">
            <Image 
              src={runningBoy}
              alt="LearnSphere AI Illustration"
              className="object-contain w-full h-full drop-shadow-xl z-10"
              priority
            />
          </div>

          {/* Pagination dots (decorative) */}
          <div className="flex gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-black/20"></div>
            <div className="w-6 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-black/20"></div>
          </div>

          <h3 className="text-xl lg:text-2xl font-medium text-center text-foreground max-w-sm lg:max-w-md">
            Make your work easier and organized with <span className="font-bold">LearnSphere AI</span>
          </h3>
        </motion.div>
      </div>

    </div>
  );
}
