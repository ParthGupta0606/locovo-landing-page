"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
export default function howitworks() {
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
            <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F2E4D0] via-[#F7F3EB] to-white">
                <img
                    src="/stem.svg"
                    alt="Stem Right"
                    className="absolute right-0 top-1/4 -translate-y-1/2 w-100 h-80"
                />
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#C79A4A] font-medium mb-6">
                            LOCOVO FOR CUSTOMERS
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#143B35] leading-tight">
                            Simple, safe,
                            <br />
                            and designed
                            <br />
                            around trust.
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover trusted wellness professionals, compare services,
                            and book appointments with confidence.
                        </p>

                        <div className="mt-10 flex justify-center gap-4 flex-wrap">
                            <button className="bg-[#2A746A] text-white px-8 py-4 rounded-full hover:scale-105 transition">
                                Find Wellness Services
                            </button>

                            <button className="border border-[#143B35] text-[#143B35] px-8 py-4 rounded-full hover:bg-[#143B35] hover:text-white transition">
                                Learn More
                            </button>
                        </div>

                    </div>

                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-[#EAF3F3] rounded-[32px] p-10 border border-[#D4E6E6]">
                        <span className="inline-block bg-[#D9ECEB] text-[#2A746A] text-xs font-semibold px-4 py-2 rounded-full">
                            FOR CUSTOMERS
                        </span>
                        <h2 className="text-3xl font-serif text-[#143B35] mb-4">
                            Find wellness that fits your routine.
                        </h2>

                        <p className="text-gray-600 mt-4 mb-8">
                            A clear journey from discovering services to booking with confidence.
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2A746A] text-white flex items-center justify-center">
                                    1
                                </div>

                                <div>
                                    <h4 className="font-semibold">Explore Services</h4>
                                    <p className="text-gray-600 text-sm">
                                        Browse massage, beauty, skincare and more.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2A746A] text-white flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold">Join the waitlist</h4>
                                    <p className="text-gray-600 text-sm">
                                        Tell us your city and services you want.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2A746A] text-white flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold">Get launch updates</h4>
                                    <p className="text-gray-600 text-sm">
                                        We’ll notify you when Locovo launches.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2A746A] text-white flex items-center justify-center">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold">Book With confidence</h4>
                                    <p className="text-gray-600 text-sm">
                                        Once we launch, you'll be able too book with verified professionals
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href={"/early-access"}>
                            <button className="mt-10 bg-[#2A746A] text-white px-8 py-4 rounded-full">
                                Join Early Access
                            </button>
                        </Link>
                    </div>
                    <div className="bg-[#FBF6EE] rounded-[32px] p-10 border border-[#F1E3C9]">
                        <span className="inline-block bg-[#F2D9A8] text-[#C08A1A] text-xs font-semibold px-4 py-2 rounded-full">
                            FOR PROFESSIONALS
                        </span>
                        <h2 className="text-3xl font-serif text-[#143B35] mb-4">
                            Grow a practice with confidence
                        </h2>
                        <p className="text-gray-600">
                            A simple process to join early and prepare for launch
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D8A54B] text-white flex items-center justify-center">
                                    1
                                </div>

                                <div>
                                    <h4 className="font-semibold">Apply as a provider </h4>
                                    <p className="text-gray-600 text-sm">
                                        Share your services, location, and professional background.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D8A54B] text-white flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold">Complete verification</h4>
                                    <p className="text-gray-600 text-sm">
                                        Submit relevant details for review.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D8A54B] text-white flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold">Set your service area</h4>
                                    <p className="text-gray-600 text-sm">
                                        Choose where and when you’d like to work.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D8A54B] text-white flex items-center justify-center">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold">Prepare for launch</h4>
                                    <p className="text-gray-600 text-sm">
                                        Connect with customers once provider onboarding opens after launch.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href={"/provider"}>
                            <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
                                Become a provider
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#EAF5F2] flex items-center justify-center mb-4">
                            ✓
                        </div>
                        <h3 className="text-xl font-semibold text-[#143B35]">
                            Verified Professionals
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Every provider is carefully reviewed before joining Locovo.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#FFF5E5] flex items-center justify-center mb-4">

                        </div>
                        <h3 className="text-xl font-semibold text-[#143B35]">
                            City-wide Coverage
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Discover wellness services near you.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#EEF4E8] flex items-center justify-center mb-4">
                            🏠
                        </div>
                        <h3 className="text-xl font-semibold text-[#143B35]">
                            Integrated Scheduling
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Manage appointments and bookings easily.
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-24 mt-16"
                style={{
                    backgroundImage: "url('/bg.svg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "33.33% auto",
                }}>

                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-center text-5xl font-serif text-[#143B35] mb-12">
                        Questions, answered.
                    </h2>
                    <div className="space-y-4">
                        <details className="bg-white rounded-2xl p-6">
                            <summary className="cursor-pointer font-medium">
                                What types of wellness services are available?
                            </summary>
                            <p className="mt-4 text-gray-600">
                                Massage therapy, yoga, fitness coaching, nutrition and more.
                            </p>
                        </details>

                        <details className="bg-white rounded-2xl p-6">
                            <summary className="cursor-pointer font-medium">
                                How does booking work?
                            </summary>

                            <p className="mt-4 text-gray-600">
                                Choose a provider, select a time slot and confirm your booking.
                            </p>
                        </details>

                        <details className="bg-white rounded-2xl p-6">
                            <summary className="cursor-pointer font-medium">
                                Are providers verified?
                            </summary>

                            <p className="mt-4 text-gray-600">
                                Yes. All professionals go through a verification process.
                            </p>
                        </details>

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

                                <Link href={"/provider"}><button className="mt-8 bg-[#D9A548] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                                    Become a provider
                                </button></Link>

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