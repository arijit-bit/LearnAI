"use client";

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-on-background">
      {/* Left Side: Branding & Illustration (Hidden on mobile, takes 50% on desktop) */}
      <div className="hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-primary/10 via-primary-container/20 to-tertiary-container/30 relative overflow-hidden p-12">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-sm mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-lg font-bold text-2xl shadow-lg">
                L
              </div>
              <h1 className="font-display-lg text-3xl font-bold text-primary dark:text-primary-fixed tracking-tight">
                LearnSphere AI
              </h1>
            </div>
            <p className="text-xl text-on-surface-variant font-medium max-w-md leading-relaxed">
              Learn smarter with AI-powered study support
            </p>
          </div>

          {/* Floating Feature Cards */}
          <div className="relative flex-1 flex items-center justify-center my-12">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Center Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full animate-pulse blur-xl"></div>
              
              {/* Feature Card 1 */}
              <div className="absolute top-[10%] left-[5%] glass-panel bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                </div>
                <div className="font-semibold text-sm text-on-surface">AI Doubt Solver</div>
              </div>

              {/* Feature Card 2 */}
              <div className="absolute top-[30%] right-[0%] glass-panel bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>quiz</span>
                </div>
                <div className="font-semibold text-sm text-on-surface">Smart Quizzes</div>
              </div>

              {/* Feature Card 3 */}
              <div className="absolute bottom-[30%] left-[0%] glass-panel bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>query_stats</span>
                </div>
                <div className="font-semibold text-sm text-on-surface">Progress Tracking</div>
              </div>

              {/* Feature Card 4 */}
              <div className="absolute bottom-[10%] right-[10%] glass-panel bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div className="font-semibold text-sm text-on-surface">Personalized Learning</div>
              </div>
            </div>
          </div>

          <div className="text-sm text-on-surface-variant/70 font-medium">
            © {new Date().getFullYear()} LearnSphere AI. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 relative">
        {/* Mobile Header (Only visible on small screens) */}
        <div className="lg:hidden w-full max-w-md flex items-center gap-sm mb-12">
          <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-lg font-bold text-xl shadow-md">
            L
          </div>
          <h1 className="font-display-lg text-2xl font-bold text-primary dark:text-primary-fixed">
            LearnSphere AI
          </h1>
        </div>

        <div className="w-full max-w-md bg-surface border border-outline-variant rounded-3xl p-8 md:p-10 shadow-2xl relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-on-surface mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant">Login to continue your learning journey</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-semibold text-on-surface">
                Email
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">
                  mail
                </span>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-semibold text-on-surface">
                Password
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">
                  lock
                </span>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-xl py-3 pl-10 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface focus:outline-none p-1 rounded-md"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded bg-surface-container-low checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                  />
                  <span className="material-symbols-outlined absolute text-on-primary text-[14px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                    check
                  </span>
                </div>
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-sm font-semibold text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                Sign In
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-outline-variant"></div>
            <span className="px-4 text-xs font-medium text-on-surface-variant uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-1 border-t border-outline-variant"></div>
          </div>

          {/* Social Login */}
          <div>
            <button
              type="button"
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low font-semibold text-sm py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
          </div>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-on-surface-variant">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-primary hover:underline">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
