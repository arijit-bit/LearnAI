"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EyeOff, Loader2 } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import runningBoy from "../../assets/svg/running-boy-removed.svg";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === "demo@learnai.com" && password === "password123") {
      router.push("/");
    } else {
      setError("Invalid credentials. Please try demo@learnai.com / password123");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0b0b0b]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1380px] flex-col px-6 py-8 lg:flex-row lg:items-stretch lg:gap-12 lg:px-16 xl:gap-18">
        <section className="flex w-full flex-1 items-center justify-center py-10 lg:max-w-[520px] lg:justify-start lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-[430px]"
          >
            <div className="mb-11 text-center lg:text-left">
              <h1 className="text-[40px] font-black leading-none tracking-normal sm:text-[46px]">
                Welcome back!
              </h1>
              <p className="mx-auto mt-5 max-w-[340px] text-[13px] font-medium leading-[1.45] text-[#737373] lg:mx-0">
                Simplify your workflow and boost your productivity with{" "}
                <span className="font-bold text-[#3a3a3a]">LearnSphere AI</span>.
                Get started for free.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-medium text-red-600"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-3">
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                  required
                  className="!h-[46px] !rounded-full !border-[#9a9a9a] !bg-white px-6 text-[14px] font-medium !text-[#111] !shadow-none placeholder:!text-[#9d9d9d] focus-visible:!border-[#111] focus-visible:!ring-0"
                />

                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="!h-[46px] !rounded-full !border-[#9a9a9a] !bg-white px-6 pr-14 text-[14px] font-medium !text-[#111] !shadow-none placeholder:!text-[#9d9d9d] focus-visible:!border-[#111] focus-visible:!ring-0"
                  />
                  <button
                    type="button"
                    aria-label="Password visibility"
                    className="absolute right-6 top-1/2 flex -translate-y-1/2 text-[#9a9a9a] transition hover:text-[#111]"
                  >
                    <EyeOff className="h-5 w-5" strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <Link
                  href="#"
                  className="text-[12px] font-bold text-[#111] transition hover:text-[#75ad6a]"
                >
                  Forgot Password?
                </Link>
              </div>

              <motion.div className="mt-7" whileTap={{ scale: 0.985 }}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="!h-[46px] w-full !rounded-full !bg-black text-[14px] font-bold !text-white !shadow-none transition hover:!bg-[#1b1b1b]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </motion.div>
            </form>

            <p className="mt-8 text-center text-[14px] font-medium text-[#202020]">
              Not a member?{" "}
              <Link href="#" className="font-semibold text-[#74a56d] hover:text-[#55864f]">
                Register now
              </Link>
            </p>
          </motion.div>
        </section>

        <section className="hidden flex-1 items-center justify-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative flex h-full max-h-[760px] min-h-[650px] w-full max-w-[690px] flex-col items-center justify-center overflow-hidden rounded-[34px] bg-[#f7fbf6] px-12 py-12"
          >
            <div className="relative mt-2 flex w-full flex-1 flex-col items-center justify-center">
              <Image
                src={runningBoy}
                alt="LearnSphere AI illustration"
                priority
                className="relative z-10 h-auto max-h-[430px] w-[82%] max-w-[500px] object-contain drop-shadow-[0_26px_45px_rgba(0,0,0,0.10)]"
              />
              <div className="mt-8 grid w-full max-w-[520px] grid-cols-3 gap-3">
                <div className="rounded-[18px] border border-[#9ecb96]/60 bg-white/70 px-4 py-4 text-center">
                  <p className="text-[13px] font-black text-[#111]">Smart Lessons</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#6f7c6b]">
                    Learn by topic
                  </p>
                </div>
                <div className="rounded-[18px] border border-[#9ecb96]/60 bg-white/70 px-4 py-4 text-center">
                  <p className="text-[13px] font-black text-[#111]">Practice Tests</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#6f7c6b]">
                    Quiz anytime
                  </p>
                </div>
                <div className="rounded-[18px] border border-[#9ecb96]/60 bg-white/70 px-4 py-4 text-center">
                  <p className="text-[13px] font-black text-[#111]">Progress</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#6f7c6b]">
                    Track growth
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-6 rounded-full bg-black" />
            </div>

            <p className="max-w-[470px] text-center text-[28px] font-medium leading-[1.25] tracking-normal">
              Make your work easier and organized with{" "}
              <span className="font-black">LearnSphere AI</span>
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
