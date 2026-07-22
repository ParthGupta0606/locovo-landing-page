"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Customers() {
    return (
        <main className="min-h-screen bg-[#F9F7F2]">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl bg-white rounded-full px-8 py-4 shadow-sm flex items-center justify-between">
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
                    <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
                        Become a provider
                    </button>
                </div>
            </motion.nav>

            <section className="max-w-4xl mx-auto text-center py-20">

                <h1 className="text-6xl font-serif text-[#143B35] leading-tight">
                    Wellness services, made easier to
                    <br />
                    access from home.
                </h1>

                <p className="text-gray-500 mt-6">
                    Join early access to help bring trusted
                    at-home wellness services to your city.
                </p>

                <button className="mt-8 bg-[#2F8A82] text-white px-8 py-3 rounded-full">
                    Join Early Access
                </button>

            </section>

            {/* Main Section */}
            <section className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Benefits Card */}
                    <div className="bg-[#FBF8F3] rounded-[32px] p-10 shadow-sm">

                        <h2 className="text-4xl font-serif text-[#143B35] text-center">
                            Why join early access?
                        </h2>

                        <p className="text-center text-gray-500 mt-4">
                            Your interest helps build a better experience
                            and bring trusted services to more communities.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-10 ">

                            {[
                                {
                                    title: "Help bring Locovo to your area",
                                    text: "Your interest helps us understand where demand is strongest.",
                                },
                                {
                                    title: "Tell us what you need",
                                    text: "Choose the wellness services you're most interested in.",
                                },
                                {
                                    title: "Get relevant launch updates",
                                    text: "Receive personalized launch progress updates.",
                                },
                                {
                                    title: "Be among the first to access",
                                    text: "Get early booking opportunities when we launch.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-2xl p-5 border shadow-sm"
                                >
                                    <h3 className="font-semibold text-[#143B35]">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Launch Area */}
                        <div className="bg-white rounded-2xl border p-5 mt-6">

                            <h3 className="font-semibold text-[#143B35]">
                                Launching first across the Greater Toronto Area
                            </h3>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {[
                                    "Toronto",
                                    "Mississauga",
                                    "Brampton",
                                    "Markham",
                                ].map((city) => (
                                    <span
                                        key={city}
                                        className="px-3 py-1 bg-[#F5F5F5] rounded-full text-xs"
                                    >
                                        {city}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-gray-500 mt-4">
                                Not in one of these areas? Join early access anyway.
                            </p>

                        </div>

                    </div>

                    {/* Form */}
                    <div>

                        <h2 className="text-4xl font-serif text-[#143B35] mb-6">
                            Customer Waitlist Form
                        </h2>

                        <div className="bg-white rounded-[32px] p-8 shadow-lg">

                            <div className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="First Name Last Name"
                                    className="w-full border rounded-xl p-3"
                                />

                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    className="w-full border rounded-xl p-3"
                                />

                                <input
                                    type="tel"
                                    placeholder="+91"
                                    className="w-full border rounded-xl p-3"
                                />

                                <div className="grid grid-cols-2 gap-4">

                                    <select className="border rounded-xl p-3">
                                        <option>Select province</option>
                                    </select>

                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="border rounded-xl p-3"
                                    />

                                </div>

                                <select className="border rounded-xl p-3 w-full">
                                    <option>Choose a service</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="Day, Time"
                                    className="w-full border rounded-xl p-3"
                                />

                                <label className="flex items-start gap-3 text-sm text-gray-500">

                                    <input type="checkbox" />

                                    <span>
                                        I agree to receive updates,
                                        availability and early access notices.
                                    </span>

                                </label>

                                <button className="w-full bg-[#2F8A82] text-white py-4 rounded-full hover:scale-105 transition">
                                    Join early access
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            
            <section className="py-24 bg-[#F7F3EB]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#F8F3EC] rounded-[32px] p-12 relative overflow-hidden">
                        {/* Heading */}
                        <div className="text-center">
                            <h2 className="text-5xl md:text-6xl font-serif text-[#143B35] leading-tight">
                                Wellness, your way.<br />Coming soon.
                            </h2>
                            <p className="text-gray-500 mt-6 max-w-xl mx-auto">
                                Personalized wellness services at home and
                                exclusive experiences at premium destinations.
                            </p>
                        </div>
                        {/* Content */}
                        <div className="grid md:grid-cols-2 mt-20 relative">
                            {/* Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border flex items-center justify-center text-sm">
                                    OR
                                </div>
                            </div>
                            {/* Left */}
                            <div className="text-center px-10">
                                <div className="w-20 h-20 mx-auto rounded-full bg-[#E8F1E7] flex items-center justify-center mb-6">
                                    <img
                                        src="/wellness.svg"
                                        alt=""
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-[#143B35] uppercase">
                                    Looking for a<br />Wellness Service?
                                </h3>
                                <p className="text-gray-500 mt-4">
                                    Be the first to access personalized
                                    wellness services and exclusive offers.
                                </p>
                                <button className="mt-8 bg-[#2F7D74] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                                    Join early access
                                </button>
                                <p className="text-sm text-gray-400 mt-4">
                                    No spam. Just updates that matter.
                                </p>
                            </div>

                            {/* Right */}
                            <div className="text-center px-10 mt-12 md:mt-0">
                                <div className="w-20 h-20 mx-auto rounded-full bg-[#F6E7C6] flex items-center justify-center mb-6">
                                    <img
                                        src="/provider.svg"
                                        alt=""
                                        className="w-14 h-14"
                                    />
                                </div>

                                <h3 className="text-3xl font-bold text-[#143B35] uppercase">
                                    Looking for a<br />Wellness Provider?
                                </h3>
                                <p className="text-gray-500 mt-4">
                                    Be the first to access personalized
                                    wellness services and exclusive offers.
                                </p>

                                <button className="mt-8 bg-[#D9A548] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                                    Become a provider
                                </button>

                                <p className="text-sm text-gray-400 mt-4">
                                    Quick application. We'll be in touch.
                                </p>
                            </div>
                            <Image
                                src="/mortar.svg"
                                alt=""
                                width={160}
                                height={160}
                                className="absolute bottom-0 left-0 opacity-100" />
                            <Image
                                src="/pebble.svg"
                                alt=""
                                width={190}
                                height={120}
                                className="absolute bottom-0 right-0 opacity-100" />

                        </div>

                    </div>
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
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
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
