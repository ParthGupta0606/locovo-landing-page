"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Contact() {
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
                    <Link href="/professional" className="hover:scale-110 transition-all duration-300">For Professionals</Link>
                </div>
                <div className="hidden lg:flex gap-4">
                    <Link href={"/early-access"}>
                    <button className="px-5 py-2 rounded-full bg-[#2B7A78] text-white text-sm">
                        Join the waitlist
                    </button>
                    </Link>
                    <Link href={"/provider"}>
                        <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
                            Become a provider
                        </button>
                    </Link>
                </div>
            </motion.nav>

            <section className="relative py-24 bg-[#FBF8F3] overflow-hidden">

                {/* Left Decoration */}
                <Image
                    src="/flower-left.svg"
                    alt=""
                    width={250}
                    height={250}
                    className="absolute left-0 top-16 pointer-events-none"
                />

                {/* Right Decoration */}
                <Image
                    src="/flower-right.svg"
                    alt=""
                    width={220}
                    height={220}
                    className="absolute right-0 top-16 pointer-events-none"
                />

                <div className="max-w-5xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-6xl font-serif text-[#143B35]">
                            Get in touch!
                        </h1>

                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                            Have a question about early access, provider applications,
                            partnerships, or launch regions?
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-xl">

                        <form className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="block text-sm text-[#143B35] mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Firstname Lastname"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-[#143B35] mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                />
                            </div>

                            {/* Type */}
                            <div>
                                <label className="block text-sm text-[#143B35] mb-2">
                                    I am a : Customer / Provider / Partner / Other
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter text"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                />
                            </div>

                            {/* Province + City */}
                            <div className="grid md:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-sm text-[#143B35] mb-2">
                                        Province
                                    </label>

                                    <select
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                    >
                                        <option>Select province</option>
                                        <option>Ontario</option>
                                        <option>British Columbia</option>
                                        <option>Alberta</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-[#143B35] mb-2">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="e.g. Toronto"
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                    />
                                </div>

                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-[#143B35] mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Enter your query..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2F8A82]"
                                />
                            </div>

                            {/* Submit */}
                            <Link href="/professional">
                                <button
                                    type="submit"
                                    className=" w-full bg-[#2F8A82] text-white py-4 rounded-full font-medium hover:scale-[1.02]  hover:shadow-lg  transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </Link>

                        </form>

                    </div>

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