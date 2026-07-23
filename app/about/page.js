"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
export default function about() {
    return (
        <main className="min-h-screen bg-[#F9F7F2] p-4 md:p-8">
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
                    <Link href="/about" className="hover:scale-110 transition-all duration-300">About </Link>
                    <Link href="/how-it-works" className="hover:scale-110 transition-all duration-300">How it works</Link>
                    <Link href="/services" className="hover:scale-110 transition-all duration-300">Services</Link>
                    <Link href="/customers" className="hover:scale-110 transition-all duration-300">For Customers</Link>
                    <Link href="/professional" className="hover:scale-110 transition-all duration-300">For Professionals</Link>

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


            <section className="py-24 bg-gradient-to-b bg-[#F2E4D0] via-[#F7F3EB] to-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Hero Text */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl font-serif text-[#143B35] leading-tight">
                            Making trusted wellness more
                            <br />
                            accessible at home.
                        </h1>

                        <p className="mt-6 text-gray-500">
                            We are building a Canada-focused wellness marketplace
                            that connects people with trusted professionals for
                            convenient at-home services.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="mt-16 bg-white rounded-[24px] border border-gray-200 shadow-sm p-8 relative">

                        <div className="absolute left-0 top-8 h-16 w-1 bg-[#D8A54B] rounded-full" />

                        <h2 className="text-4xl font-serif text-[#143B35] ml-4">
                            Our Mission
                        </h2>

                        <p className="mt-4 ml-4 text-gray-600">
                            To make wellness services
                            <span className="text-[#2F8A82]"> easier</span>,
                            <span className="text-[#2F8A82]"> safer</span>,
                            and
                            <span className="text-[#2F8A82]"> more convenient</span>
                            by connecting customers with verified professionals
                            in their region.
                        </p>

                    </div>

                    {/* Why We Exist */}
                    <div className="relative py-20 text-center">

                        <Image
                            src="/flower-left.svg"
                            alt=""
                            width={170}
                            height={140}
                            className="absolute left-0 top-1/2 -translate-y-1/2"
                        />

                        <Image
                            src="/flower-right.svg"
                            alt=""
                            width={150}
                            height={140}
                            className="absolute right-0 top-1/2 -translate-y-1/2"
                        />

                        <h2 className="text-5xl font-serif text-[#143B35]">
                            Why we exist?
                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            Finding trusted wellness professionals for at-home
                            services can be difficult, fragmented, and
                            time-consuming. We want to simplify that experience
                            while helping professionals reach more customers.
                        </p>

                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#EAF4F5] rounded-[24px] border border-[#D7E5E7] p-10 relative">

                        <div className="absolute right-0 top-8 h-20 w-1 bg-[#2F8A82] rounded-full" />

                        <h2 className="text-right text-5xl font-serif text-[#143B35]">
                            Our Vision
                        </h2>

                        <p className="mt-6 text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            To become a
                            <span className="text-[#D8A54B]">
                                {" "}trusted wellness marketplace{" "}
                            </span>

                            where customers feel

                            <span className="text-[#D8A54B]">
                                {" "}safe booking services{" "}
                            </span>

                            and professionals can

                            <span className="text-[#D8A54B]">
                                {" "}grow{" "}
                            </span>

                            with confidence.
                        </p>

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
                                <Link href={"/early-access"}>
                                    <button className="mt-8 bg-[#2F7D74] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                                        Join early access
                                    </button>
                                </Link>
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