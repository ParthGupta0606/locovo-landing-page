"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/services", label: "Services" },
    { href: "/customers", label: "For Customers" },
    { href: "/professional", label: "For Professionals" },
];
export default function Safety() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(0);
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2]">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="sticky top-4 z-50 mx-auto mt-4 w-[95%] max-w-7xl rounded-full bg-white shadow-md"
            >
                <div className="flex items-center justify-between px-5 py-4 lg:px-8">

                    {/* Logo */}

                    <Link href="/" className="flex items-center gap-3">

                        <Image
                            src="/logo.svg"
                            alt="Locovo"
                            width={40}
                            height={40}
                        />

                        <span className="text-2xl font-bold tracking-wide text-[#2B7A78]">
                            LOCOVO
                        </span>

                    </Link>

                    {/* Desktop Links */}

                    <div className="hidden lg:flex items-center gap-8">

                        {navLinks.map((link) => (

                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition duration-300 hover:text-[#2B7A78] ${link.href === "/how-it-works"
                                    ? "font-semibold text-[#2B7A78]"
                                    : "text-[#24423F]"
                                    }`}
                            >
                                {link.label}
                            </Link>

                        ))}

                    </div>

                    {/* Desktop Buttons */}

                    <div className="hidden lg:flex items-center gap-4">

                        <Link href="/customer">

                            <button className="rounded-full bg-[#2B7A78] px-6 py-3 text-white transition hover:scale-105">
                                Join Waitlist
                            </button>

                        </Link>

                        <Link href="/professional">

                            <button className="rounded-full bg-[#D8A44D] px-6 py-3 text-white transition hover:scale-105">
                                Become a Provider
                            </button>

                        </Link>

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden"
                        aria-label="Toggle navigation menu"
                    >

                        {menuOpen ? (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                        ) : (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        )}

                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="border-t bg-white lg:hidden">

                        <div className="flex flex-col gap-5 p-6">

                            {navLinks.map((link) => (

                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`${link.href === "/how-it-works"
                                        ? "font-semibold text-[#2B7A78]"
                                        : "text-[#24423F]"
                                        }`}
                                >
                                    {link.label}
                                </Link>

                            ))}

                            <Link href="/customer">

                                <button className="w-full rounded-full bg-[#2B7A78] py-3 text-white">
                                    Join Waitlist
                                </button>

                            </Link>

                            <Link href="/professional">

                                <button className="w-full rounded-full bg-[#D8A44D] py-3 text-white">
                                    Become a Provider
                                </button>

                            </Link>

                        </div>

                    </div>

                )}

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
                            <Link href={"/"}>
                                <div className="flex items-center gap-3 mb-4">
                                    <Image src="/logo.svg" alt="Locovo" width={36} height={36} />
                                    <span className="text-2xl font-semibold">LOCOVO</span>
                                </div>
                            </Link>
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