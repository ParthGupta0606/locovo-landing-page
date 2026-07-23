"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Safety() {
    return (
        <main className="min-h-screen bg-[#F9F7F2]">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-[50] mx-auto max-w-7xl bg-white  rounded-full px-8 py-4 shadow-sm flex items-center justify-between">
                <div className="text-2xl font-bold text-[#2B7A78]">
                    LOCOVO
                </div>
                <div className="hidden lg:flex gap-8 text-sm text-gray-700">
                    <Link href="/" className="hover:scale-110 transition-all duration-300"> Home </Link>
                    <Link href="/about" className="nav-link">About </Link>
                    <Link href="/how-it-works" className="hover:scale-110 transition-all duration-300">How it works</Link>
                    <Link href="/services" className="hover:scale-110 transition-all duration-300">Services</Link>
                    <Link href="/customers" className="hover:scale-110 transition-all duration-300">For Customers</Link>
                    <Link href="/safety" className="hover:scale-110 transition-all duration-300">For Professionals</Link>
                </div>
                <div className="hidden lg:flex gap-4">
                    <button className="px-5 py-2 rounded-full bg-[#2B7A78] text-white text-sm">
                        Join the waitlist
                    </button>
                    <Link href={"/provider"}>
                    <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
                        Become a provider
                    </button>
                    </Link>
                </div>
            </motion.nav>


            <section className="min-h-screen bg-[#FBF8F3]">
                <div className=" relative py-24 bg-[#FBF8F3] overflow-hidden max-w-5xl mx-auto px-6">

                    <div className="text-center mb-12">
                        <h1 className="text-7xl font-serif text-[#143B35]">
                            Your application has been recieved
                        </h1>

                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                            Thank you for your message. Our team will review your information and contact you with next steps when provider onboarding begins.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href="/">
                        <button type="submit" className=" px-5 py-2 rounded-full bg-[#2B7A78] text-white text-sm">
                            Back To Home
                        </button>
                    </Link>
                </div>
            </section>



            <footer className="bg-[#0F3432] text-white">
                <div className="max-w-7xl mx-auto px-8 py-16">
                    {/* Top Footer */}
                    <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/logo.svg" alt="Locovo" width={36} height={36} />
                                <span className="text-2xl font-semibold">LOCOVO</span>
                            </div>

                            <p className="text-sm text-[#C6D2CE] max-w-xs">
                                Join the early access list and help decide
                                where Locovo launches first.
                            </p>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                                Company
                            </h4>

                            <ul className="space-y-3 text-[#C6D2CE] text-sm">
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Policies */}
                        <div>
                            <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                                Policies
                            </h4>

                            <ul className="space-y-3 text-[#C6D2CE] text-sm">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Trust */}
                        <div>
                            <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                                Trust
                            </h4>

                            <ul className="space-y-3 text-[#C6D2CE] text-sm">
                                <li><a href="#">Safety & Verification</a></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                                Social Links
                            </h4>

                            <div className="flex gap-4 text-xl">
                                <i className="ri-instagram-line"></i>
                                <i className="ri-whatsapp-line"></i>
                                <i className="ri-twitter-x-line"></i>
                                <i className="ri-linkedin-box-line"></i>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#C6D2CE] text-sm">
                            Product experience powered by
                            <span className="ml-2 tracking-[0.35em] text-white">
                                STRIX
                            </span>
                        </p>

                        <p className="text-[#C6D2CE] text-sm">
                            © 2026 Locovo. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </main>

    );
}